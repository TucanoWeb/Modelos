from models.sqlite import CreateDBModel
from flask import jsonify
from werkzeug.security import generate_password_hash


class Insert():
    def post(value):
        data = value
        _email = data['email']
        _password = generate_password_hash(data['password'])

        stmt = f"INSERT INTO users ( email, password) VALUES ('{_email}', '{_password}')"

        try:
            CreateDBModel.connection(stmt)
            return jsonify({
                'error': False,
                'message': 'Success'
            })
        except:
            return jsonify({
                'error': True,
                'message': 'Error'
            })
