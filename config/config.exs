# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :elplan,
  ecto_repos: [Elplan.Repo]

# Configures the endpoint
config :elplan, Elplan.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "/1nzgyyUiMmn8GYTA3FKRflEHQSfYQC2EHUflBa6U8QucsRJyYZdnAUbYp9OqRZY",
  render_errors: [view: Elplan.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Elplan.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configure Slim templates
config :phoenix, :template_engines,
  slim: PhoenixSlime.Engine,
  slime: PhoenixSlime.Engine

# Configure JSON API formats
config :phoenix, :format_encoders,
  "json-api": Poison

config :mime, :types, %{
  "application/vnd.api+json" => ["json-api"]
}

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
