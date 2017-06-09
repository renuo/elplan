use Mix.Config

config :elplan,
  oauth_client: Elplan.Mock.OAuth2.Client

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :elplan, Elplan.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :elplan, Elplan.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "elplan_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# Configure Google OAuth
config :elplan, Google,
  client_id: "not_needed",
  client_secret: "not_needed"

# Configure Guardian
config :guardian, Guardian,
  secret_key: "vtDN9nDVsuka+KuEXvSdED5vqQGRXxp3+5xbbNOR37NUaXIehU/o7Qak1oN5biQI"
