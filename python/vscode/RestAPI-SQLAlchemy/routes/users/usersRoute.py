from resources.users.insertNewResource import InsertUser


class RoutesUsers():

    def init(api):
        api.add_resource(InsertUser, '/insert/user')
