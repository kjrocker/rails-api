module V1
  class UserTokenController < Knock::AuthTokenController
    def create
      render json: {
        user: UserSerializer.new(entity),
        jwt: auth_token.token,
      }, status: :created
    end

    private

    def auth_params
      params.require(:auth).permit :email, :password
    end
  end
end
