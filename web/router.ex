defmodule Elplan.Router do
  use Elplan.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Elplan.Plugs.Authentication
  end

  pipeline :api do
    plug :accepts, ["json-api"]
    plug Elplan.Plugs.Authentication
  end

  scope "/", Elplan do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", Elplan do
    pipe_through :api
    scope "/v1" do
      get "/authorization", AuthorizationController, :index
    end
  end
end
