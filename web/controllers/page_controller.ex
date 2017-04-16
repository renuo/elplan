defmodule Elplan.PageController do
  use Elplan.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
