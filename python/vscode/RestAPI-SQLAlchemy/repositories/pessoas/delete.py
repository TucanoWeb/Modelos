from models.sqlite import CreateDBModel
from flask import jsonify


class Delete():

    @classmethod
    def delete(self, idUser):

        stmt: str = f"DELETE FROM pessoas WHERE id={idUser}"

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
