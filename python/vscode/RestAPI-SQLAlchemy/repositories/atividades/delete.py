from models.sqlite import CreateDBModel
from flask import jsonify


class Delete():

    @classmethod
    def delete(self, idAtividade):

        stmt: str = f"DELETE FROM atividades WHERE id={idAtividade}"

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
