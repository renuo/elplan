defmodule Elplan.Plugs.Authentication do
  import Plug.Conn

  def init(default), do: default

  def call(conn, _) do
    assign(conn, :current_user, get_session(conn, :current_user))
  end
end
