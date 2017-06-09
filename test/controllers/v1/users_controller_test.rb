require 'test_helper'

module V1
  class UsersControllerTest < ActionDispatch::IntegrationTest
    setup do
      @user = create(:user)
    end

    test "should get index" do
      skip('indexing users not allowed yet!')
      get users_url, as: :json
      assert_response :success
    end

    test "should create user" do
      assert_difference('User.count') do
        post users_url, params: { user: attributes_for(:user) }, as: :json
      end

      assert_response 201
    end

    test "should show user" do
      get user_url(@user), as: :json
      assert_response :success
    end

    test "should update user" do
      patch user_url(@user), params: { user: attributes_for(:user) },
        headers: authenticated_header(@user), as: :json
      assert_response 200
    end

    test "should destroy user" do
      skip('user deletion not allowed yet!')
      assert_difference('User.count', -1) do
        delete user_url(@user), as: :json
      end

      assert_response 204
    end
  end
end
