defmodule Elplan.Serializer do
  @behaviour Guardian.Serializer
  import Ecto.Query

  alias Elplan.Repo
  alias Elplan.User

  def for_token(user = %User{}), do: { :ok, "User:#{user.email}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("User:" <> email) do
    { :ok, Repo.one(where(User, email: ^email)) }
  end
  def from_token(_), do: { :error, "Unknown resource type" }
end
