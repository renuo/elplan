defmodule Elplan.AuthorizationController do
  use Elplan.Web, :controller
  alias Elplan.Repo
  alias Elplan.User

  def index(conn, %{"code" => code, "provider" => provider}) do
    client = get_token!(provider, code)
    user = get_user!(provider, client)
    {:ok, saved } = save_user(user)
    render conn, "index.json-api", data: saved
  end

  defp get_token!("google", code), do: Google.get_token!(code: code)
  defp get_token!(_, _), do: raise "Unknown provider"

  defp get_user!("google", client) do
    %OAuth2.Response{body: user} = OAuth2.Client.get!(client, "https://www.googleapis.com/oauth2/v2/userinfo")
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
