defmodule Elplan.PageControllerTest do
  use Elplan.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "El Plan"
  end
end
