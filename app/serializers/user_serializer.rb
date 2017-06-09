class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :created_at
end
