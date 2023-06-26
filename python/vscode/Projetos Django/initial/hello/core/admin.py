from django.contrib import admin
from core.models import Evento, EventoAdmin

# Register your models here.

admin.site.register(Evento, EventoAdmin)
