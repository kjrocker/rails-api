# Generic Rails API

This is a generic API with token-based authentication. It is the starting ground
for any and all Rails API applications that I will build.

Notable features include:
* A curated set of useful gems, most notably:
    * Scenic, for database views
    * Sidekiq, for async processing
    * Brakeman and Rubocop for static analysis
    * Bullet for catching performance gotchas
    * Rename, for renaming the app from GenericApi
* Tests, tests, tests
    * Prefer factories to fixtures, and Minitest over RSpec
* Refined API-only Authentication
    * That is, after all, the only feature in the application.
* Configuration for using a complete React front-end within a single heroku application
    * Because it's easy once you do it once, but hard to do the first time
    * Updated to the latest rails (5.1.1 as of writing)
* Configuration for painless Helix integration in the `helix` branch
    * Custom generators to make testing with Helix easier
    * We're already using Ruby and Javascript, why not add Rust?

Planned or Possible Features
* Refresh tokens to go along with my session tokens
* Locking down the API itself, provide API keys for third-party APIs
* See about merging my helix generator into `helix_rails`
    * Related: investigate generator hooks instead of coding each testing library manually.
* Look into storing heroku build information in the repository...somehow
    * I will have this functionality if I have to write it myself!

# Usage
Don't forget the `--recursive` flag when cloning the repository!

Setting up the application:
```zsh
  bin/setup
```
Starting the development server(s):
```zsh
  rails start
```
Starting a production style server:
```zsh
  rails start:production
```
Starting just the API
```zsh
  rails server
```

# Deployment
This app is built to be deployed on Heroku.

First, create a heroku application with `heroku create`. Then run the following command to configure NPM correctly:
```zsh
  heroku config:set NPM_CONFIG_PRODUCTION=false
```

Then set up the following buildpacks.

Without Helix:
```zsh
  heroku buildpacks:add heroku/nodejs --index 1
  heroku buildpacks:add heroku/ruby --index 2
```

With Helix:
```zsh
  heroku buildpacks:add https://github.com/hone/heroku-buildpack-rust --index 1
  heroku buildpacks:add heroku/nodejs --index 2
  heroku buildpacks:add heroku/ruby --index 3
```

The Rust buildpack compiles the Rust extensions.

The NodeJS buildpack activates the `package.json` file at the project root, which compiles the React client and moves it to `public`.

The Ruby buildpack runs and serves the application as a whole.

# Helix

The Helix manuals will tell you to use the `helix:crate` generator for creating Rust addons.

Don't do that with this project. I've created a custom generator that runs `helix:crate`, and then adds files related to testing. My generator is also snake_case vs CamelCase insensitive.

```zsh
  rails generate helix ModuleName --test [rspec/minitest]
```

Without the `--test` option, it defaults to Minitest.
