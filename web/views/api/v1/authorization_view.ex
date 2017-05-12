defmodule Elplan.AuthorizationView do
  use Elplan.Web, :view
  use JaSerializer.PhoenixView

  attributes [:name, :email]
end
