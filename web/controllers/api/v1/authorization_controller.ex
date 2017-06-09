defmodule Elplan.AuthorizationController do
  use Elplan.Web, :controller
  alias Elplan.Repo
  alias Elplan.User

  def index(conn, %{"code" => code, "provider" => provider}) do
    client = get_token!(provider, code)
    user = get_user!(provider, client)
    case save_user(user) do
      {:ok, saved } ->
        new_conn = Guardian.Plug.api_sign_in(conn, saved)
        jwt = Guardian.Plug.current_token(new_conn)
        {:ok, claims} = Guardian.Plug.claims(new_conn)
        exp = Map.get(claims, "exp")

        new_conn
        |> put_resp_header("authorization", "Bearer #{jwt}")
        |> put_resp_header("x-expires", "#{exp}")
        |> render("index.json-api", data: Map.merge(saved, %{token: jwt}))

      {:error, _changeset} ->
        conn
        |> put_status(401)
        |> render(:errors, data: %{status: "401", title: "Authentication failed"})
    end
  end
  def index(conn, _) do
    conn
    |> put_status(400)
    |> render(:errors, data: %{status: "400", title: "Wrong request"})
  end

  defp get_token!("google", code), do: Google.get_token!(code: code)
  defp get_token!(_, _), do: raise "Unknown provider"

  defp get_user!("google", client) do
    %{body: user} = Google.userinfo!(client)
    %{name: user["name"], avatar: user["picture"], email: user["email"]}
  end

  defp save_user(user) do
    case User
    |> where(email: ^user.email)
    |> Repo.one do
      nil -> %User{email: user.email}
      dbuser -> dbuser
    end
    |> User.changeset(user)
    |> Repo.insert_or_update
  end
end
