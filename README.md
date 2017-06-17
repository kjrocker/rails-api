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
    * Due to Rails 5.1 breaking this setup, the app is locked at Rails 5.0.3
* Configuration for painless Helix integration in the `helix` branch
    * Custom generators to make testing with Helix easier
    * We're already using Ruby and Javascript really heavily, why not add Rust?

Planned or Possible Features
* Refresh tokens to go along with my session tokens
* Locking down the API itself, provide API keys for third-party APIs
* See about merging my helix generator into `helix_rails`
    * Related: investigate generator hooks instead of coding each testing library manually.

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
