defmodule Elplan.AuthorizationControllerTest do
  use Elplan.ConnCase, async: false

  setup %{conn: conn} do
    conn =
      conn
      |> put_req_header("accept", "application/vnd.api+json")
      |> put_req_header("content-type", "application/vnd.api+json")

    {:ok, conn: conn}
  end

  describe "invalid" do
    test "POST /api/v1/authorization", %{conn: conn} do
      response = conn
                 |> post(authorization_path(conn, :index))
                 |> json_response(400)
      assert %{
        "errors" => [%{
          "status" => "400",
          "title" => "Wrong request"
        }]
      } = response
    end
  end

  describe "authorized" do
    test "POST /api/v1/authorization", %{conn: conn} do
      request = Poison.encode!(%{
        code: "bbb",
        provider: "google"
      })
      response = conn
                 |> post(authorization_path(conn, :index), request)
                 |> json_response(200)
      assert %{
        "data" => %{
          "attributes" => %{
            "email" => "user@example.com",
            "name" => "user",
            "token" => "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOnVzZXJAZXhhbXBsZS5jb20iLCJleHAiOjE" <> _
          }
        }
      } = response
    end
  end
end
