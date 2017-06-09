defmodule Elplan.Mock.OAuth2.Client do
  def new(_) do
    :client
  end

  def get_token!(:client, _, _) do
    "mytoken"
  end

  def get!("mytoken", "https://www.googleapis.com/oauth2/v2/userinfo") do
    %{body: %{ "name" => "user", "picture" => "image.jpg", "email" => "user@example.com" }}
  end

  def authorize_url!(_, _) do
    raise "Not implemented"
  end
end
