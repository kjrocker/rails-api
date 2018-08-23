source 'https://rubygems.org'

gem 'rails', '~> 5.1'

# Database, server, security
gem 'pg'
gem 'puma'
gem 'foreman'
gem 'rack-cors'
gem 'rack-attack'

# Serialization
gem 'active_model_serializers'

# Authentication
gem 'jwt'
gem 'bcrypt'
gem 'knock'

# Seeds, views, soft-delete, async
gem 'seedbank'
gem 'faker'
gem 'scenic'
gem 'paranoia'
gem 'sidekiq'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'database_cleaner'
  gem 'factory_girl_rails'
end

group :development do
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'

  gem 'brakeman'
  gem 'rubocop'
  gem 'bullet'
  gem 'annotate'
  gem 'rename'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

ruby '2.4.2'
