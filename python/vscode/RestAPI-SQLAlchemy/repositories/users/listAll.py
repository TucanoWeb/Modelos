from models.sqlite import CreateDBModel
from flask import jsonify


class ListAll():

    @classmethod
    def get(self, email):

        stmt = f"SELECT * FROM users WHERE email='{email}'"

        try:
            all_users = CreateDBModel.connection(stmt)
            response = CreateDBModel.schemaUsers(all_users)
            return response[0]
        except:
            return False
