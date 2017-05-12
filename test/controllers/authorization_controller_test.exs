defmodule Elplan.AuthorizationControllerTest do
  use Elplan.ConnCase, async: true

  describe "unauthorized" do
    test "GET /api/v1/authorization", %{conn: conn} do
      response = build_conn
                 |> get(authorization_path(build_conn, :index))
                 |> json_response(401)
      assert response =~ "Unauthorized"
    end
  end
end
