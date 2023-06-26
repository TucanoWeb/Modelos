from django.shortcuts import render, HttpResponse, redirect
from core.models import Evento
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.http.response import Http404, JsonResponse
from datetime import datetime, timedelta
from core.forms import RegisterForm
from django.contrib.auth.models import User

# Create your views here.

# def index(request):
#     return redirect('/agenda/')


def login_user(request):
    return render(request, 'login.html')


def submit_login(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        usuario = authenticate(username=username, password=password)

        if usuario is not None:
            login(request, usuario)
            return redirect('/')
        else:
            messages.error(request, "Dados incorretos")
    return redirect('/')


def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = RegisterForm()

    return render(request, "register.html", {"form": form})


def logout_user(request):
    logout(request)
    return redirect('/')


@login_required(login_url='/login/')
def lista_eventos(request):
    # Puxa o usuário logado
    usuario = request.user
    # Filtra evento baseado no usuário logado e também apenas eventos que ainda não passaram e que passaram apenas 1 hora do agendado
    data_atual = datetime.now() - timedelta(hours=1)
    evento = Evento.objects.filter(usuario=usuario, data_evento__gt=data_atual)
    data = {'eventos': evento}
    return render(request, 'agenda.html', data)


@login_required(login_url='/login/')
def evento(request):
    if request.GET.get('id'):
        id_evento = request.GET.get('id')
        evento = Evento.objects.get(id=id_evento)
        dados = {'evento': evento}
        return render(request, 'evento.html', dados)
    else:
        return render(request, 'evento.html')


@login_required(login_url='/login/')
def submit_evento(request):
    if request.POST:
        titulo = request.POST.get('title')
        descricao = request.POST.get('describe')
        data_evento = request.POST.get('date')
        local = request.POST.get('local')
        usuario = request.user
        id_evento = request.POST.get('id_evento')
        if id_evento:
            Evento.objects.filter(id=id_evento).update(
                titulo=titulo, data_evento=data_evento, descricao=descricao, usuario=usuario, local=local)
            return redirect('/')
        else:
            Evento.objects.create(
                titulo=titulo, data_evento=data_evento, descricao=descricao, usuario=usuario, local=local)
            return redirect('/')
    else:
        return redirect('/')


@login_required(login_url='/login/')
def delete_evento(request, id_evento):
    usuario = request.user
    try:  # Tenta obter o evento pelo id, se não conseguir, cai em except retornando erro 404
        evento = Evento.objects.get(id=id_evento)
    except:
        raise Http404()
    if usuario == evento.usuario:  # Verifica se o usuário é proprietário do evento, senão, retornar 404
        evento.delete()
    else:
        raise Http404()
    return redirect('/')


def json_lista_evento(request, id_user):
    # Puxa o usuário pelo id passado na requisição
    usuario = User.objects.get(id=id_user)
    # Filtra evento baseado no usuário
    evento = Evento.objects.filter(usuario=usuario).values(
        'id', 'titulo', 'descricao', 'data_evento')
    # json_dumps_params resolve a questão do retorno de palavras com acento. O safe é passado, pois é uma lista. Se fosse dicionário, não iria precisar
    return JsonResponse(list(evento), safe=False, json_dumps_params={'ensure_ascii': False})
