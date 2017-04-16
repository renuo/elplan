defmodule Elplan.AuthController do
  use Elplan.Web, :controller

  def index(conn, %{"provider" => provider}) do
    redirect conn, external: authorize_url!(provider)
  end

  def callback(conn, %{"provider" => provider, "code" => code}) do
    client = get_token!(provider, code)
    user = get_user!(provider, client)

    conn
    |> put_session(:current_user, user)
    |> redirect(to: "/")
  end

  def logout(conn, _params) do
    conn
    |> put_flash(:info, "You have been logged out!")
    |> configure_session(drop: true)
    |> redirect(to: "/")
  end

  defp authorize_url!("google"), do: Google.authorize_url!(scope: "openid email profile")
  defp authorize_url!(_), do: raise "Unknown provider"

  defp get_token!("google", code), do: Google.get_token!(code: code)
  defp get_token!(_, _), do: raise "Unknown provider"

  defp get_user!("google", client) do
    %OAuth2.Response{body: user} = OAuth2.Client.get!(client, "https://www.googleapis.com/oauth2/v2/userinfo")
    %{name: user["name"], avatar: user["picture"]}
  end

end
