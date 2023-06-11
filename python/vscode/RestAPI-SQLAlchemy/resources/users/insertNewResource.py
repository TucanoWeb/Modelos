from flask_restful import Resource
from flask import request, json
from repositories.users.insertNew import Insert
from flask_httpauth import HTTPBasicAuth
from repositories.auth.api import Auth



class InsertUser(Resource):
    
    auth = HTTPBasicAuth()
    
    
    @auth.login_required
    def post(self):
        body = json.loads(request.data)
        result = Insert.post(body)
        return result
    
    @auth.verify_password
    def auth(login, password):
        return Auth.verify(login, password)
