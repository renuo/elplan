defmodule Google do
  @moduledoc """
  An OAuth2 strategy for Google.
  Taken from https://github.com/scrogson/oauth2_example
  """
  use OAuth2.Strategy

  alias OAuth2.Strategy.AuthCode
  alias Elplan.Router.Helpers

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
    |> OAuth2.Client.new()
  end

  def authorize_url!(params \\ []) do
    OAuth2.Client.authorize_url!(client(), params)
  end

  def get_token!(params \\ [], headers \\ []) do
    OAuth2.Client.get_token!(client(), params, headers)
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
