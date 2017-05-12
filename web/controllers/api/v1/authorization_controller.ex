defmodule Elplan.AuthorizationController do
  use Elplan.Web, :controller

  def index(conn, _params) do
    render conn, "index.json"
  end
end
