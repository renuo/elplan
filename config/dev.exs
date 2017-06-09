use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :elplan, Elplan.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [yarn: ["watch"]]


# Watch static and templates for browser reloading.
config :elplan, Elplan.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/controllers/.*(ex)$},
      ~r{lib/.*(ex)$},
      ~r{web/templates/.*(eex|slim|slime)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :elplan, Elplan.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "elplan_dev",
  hostname: "localhost",
  pool_size: 10

# Configure Google OAuth
config :elplan, Google,
  client_id: "330918691596-4jqcn7tdjv6kk8ub8qmg7le0mfu5b9t1.apps.googleusercontent.com",
  client_secret: "pj7KAuW-pyhG4ppuA8OpJ0sh"

config :guardian, Guardian,
  secret_key: "vtDN9nDVsuka+KuEXvSdED5vqQGRXxp3+5xbbNOR37NUaXIehU/o7Qak1oN5biQI"
