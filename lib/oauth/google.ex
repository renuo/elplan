defmodule Google do
  @moduledoc """
  An OAuth2 strategy for Google.
  Taken from https://github.com/scrogson/oauth2_example
  """
  use OAuth2.Strategy

  alias OAuth2.Strategy.AuthCode
  alias Elplan.Router.Helpers

  @oauth_client Application.fetch_env!(:elplan, :oauth_client)

  defp config do
    [
      strategy: Google,
      site: "https://accounts.google.com",
      authorize_url: "/o/oauth2/auth",
      token_url: "/o/oauth2/token",
      redirect_uri: Helpers.auth_url(Elplan.Endpoint, :index, "google")
    ]
  end

  # Public API

  def client do
    Application.get_env(:elplan, Google)
    |> Keyword.merge(config())
    |> @oauth_client.new()
  end

  def authorize_url!(params \\ []) do
    @oauth_client.authorize_url!(client(), params)
  end

  def get_token!(params \\ [], headers \\ []) do
    @oauth_client.get_token!(client(), params, headers)
  end

  def userinfo!(client) do
    @oauth_client.get!(client, "https://www.googleapis.com/oauth2/v2/userinfo")
  end

  # Strategy Callbacks

  def authorize_url(client, params) do
    AuthCode.authorize_url(client, params)
  end

  def get_token(client, params, headers) do
    client
    |> put_header("Accept", "application/json")
    |> put_param(:client_secret, client.client_secret)
    |> AuthCode.get_token(params, headers)
  end
end
