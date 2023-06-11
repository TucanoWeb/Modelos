from models.sqlite import CreateDBModel
from flask import jsonify


class EditStatus():

    @classmethod
    def put(self, value):

        stmt: str = f"UPDATE atividades SET status='{value['status']}' WHERE id={value['id']}"

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
