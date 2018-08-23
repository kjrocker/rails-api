ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  include FactoryBot::Syntax::Methods

  def authenticated_header(user)
    { 'Authorization' => "Bearer #{user.to_jwt}" }
  end
end
