"""
Essa classe é chamada para verificar se o login utilizando o método de requisição de autorização no axios ou similar contêm os dados corretos de autenticação. Ele busca os usuários que contêm o campo de login igual ao informado, através do ListAll.get. Com o retorno, ele faça a comparação no bloco condicional. Além do decorator, que encampsula o método, temos a agregação do decriptador check_password_hash, que pega a senha e decodifica.
"""


from flask_httpauth import HTTPBasicAuth
from repositories.users.listAll import ListAll
from werkzeug.security import check_password_hash


class Auth():

    auth = HTTPBasicAuth()

    @auth.verify_password
    def verify(login, password):
        if not (login, password):
            return False
        result = ListAll.get(login)
        try:
            covert_result = {
                result['email']: result['password']
            }
            if login in covert_result and check_password_hash(covert_result.get(login), password):
                return login
        except:
            return False
