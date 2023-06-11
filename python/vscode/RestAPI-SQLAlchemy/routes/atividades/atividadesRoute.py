from resources.atividades.InsertNewResource import InsertAtividade
from resources.atividades.editResource import EditAtividade
from resources.atividades.findOneResource import FindOneAtividades
from resources.atividades.deleteResource import DeleteAtividade
from resources.atividades.editStatusResource import EditStatusAtividade


class RoutesAtividades():

    def init(api):
        api.add_resource(InsertAtividade, '/insert/atividade')
        api.add_resource(EditAtividade, '/edit/atividade')
        api.add_resource(EditStatusAtividade, '/edit/atividade/status')
        api.add_resource(FindOneAtividades,
                         '/search/atividade/<int:pessoa_id>')
        api.add_resource(
            DeleteAtividade, '/delete/atividade/<int:idAtividade>')
