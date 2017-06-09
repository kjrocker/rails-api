require 'test_helper'

module V1
  class UserTokenControllerTest < ActionDispatch::IntegrationTest
    test "should return 200 when user exists" do
      user = create(:user)
      post user_token_path, params: { auth: { email: user.email, password: user.password }}
      assert_response :created
    end

    test "should return 404 when user not found" do
      user = build(:user)
      post user_token_path, params: { auth: { email: user.email, password: user.password }}
      assert_response :not_found
    end
  end
end
