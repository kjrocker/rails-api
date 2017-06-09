class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true

  # Simple wrapper for Knock, making it easy to grab new tokens
  def to_jwt
    Knock::AuthToken.new(payload: to_token_payload).token
  end
end
