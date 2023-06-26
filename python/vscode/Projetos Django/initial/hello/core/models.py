from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.


class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(blank=True, null=True)
    # Verbose altera como o nome da coluna aparece
    data_evento = models.DateTimeField(verbose_name="Data do Evento")
    data_criacao = models.DateTimeField(auto_now=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    local = models.TextField()

    class Meta:
        db_table = 'evento'  # Nome da tabela

    def __str__(self) -> str:
        return self.titulo
    
    def get_data_evento(self):
        return self.data_evento.strftime('%d/%m/%Y às %H:%M')
    
    def get_data_input_evento(self):
        return self.data_evento.strftime('%Y-%m-%dT%H:%M')
    
    def get_evento_atrasado(self):
        if self.data_evento < datetime.now():
            return True
        else:
            return False


class EventoAdmin(admin.ModelAdmin):
    # Como irá aparecer na descrição da tabela no admin django (painel)
    list_display = ('id', 'titulo', 'descricao', 'local', 'data_evento', 'data_criacao')
    # Acidione um filtro na páginda de administração de banco de dados no admin django (painel).
    # IMPORTANTE: Como é um tupla, tem que colocar a vírgula no final para mostrar que acabou.
    list_filter = ('titulo',)
