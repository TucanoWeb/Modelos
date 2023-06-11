from flask import Flask
from flask_restful import Api
from models.entities.createAll import CreateAll
from routes.pessoas.pessoasRoute import RoutesPessoas
from routes.atividades.atividadesRoute import RoutesAtividades
from routes.users.usersRoute import RoutesUsers
from routes.auth.authRoute import AuthRoute

app = Flask(__name__)
api = Api(app)

# Rotas
RoutesPessoas.init(api)
RoutesAtividades.init(api)
RoutesUsers.init(api)
AuthRoute.init(api)

# Create tables (entities)
CreateAll.init()


if __name__ == '__main__':
    app.run(debug=True)
