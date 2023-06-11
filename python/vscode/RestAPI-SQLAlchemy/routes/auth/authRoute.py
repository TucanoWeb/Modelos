from resources.auth.authResource import AuthLoginAdmin


class AuthRoute():

    def init(api):
        api.add_resource(AuthLoginAdmin, '/login')
