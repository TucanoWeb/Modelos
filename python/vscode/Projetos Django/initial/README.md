### GET START

- Virtual env
```python
python -v venv env1
```

- Ativar env
```bash
cd .\env1\Scripts
```
```bash
.\activate
```

- Instalar Django
```python
pip install django
```

vIniciar projeto
```python
django-admin startproject nomeprojeto
```

- Entrar na pasta do projeto para iniciar manage.py
```bash
cd .\nomeprojeto
```
```python
python .\manage.py runserver
```

- Agora, vamos iniciar um app chamado core, onde vai estar o "coração" do django
```bash
django-admin startapp core
```

- Após criar o app novo, é necessário ir até a pasta criada com o nome do projeto, em settings.py e colocar o nome do app. Exemplo:

INSTALLED_APPS = [
    ...,
    'core'
]

- Agora, vamos criar uma rota. Para criar uma rota, primeiro é necessário criar uma view. Basta navegar até views.py no app criado, no caso o core, e inserir o código que será retornado. Exemplo:
```python
from django.shortcuts import render, HttpResponse

# Create your views here.


def hello(request):
    return HttpResponse('<h1>Hello World</h1>')
```

- Agora, basta inserir em urls.py, no projeto:
```python

from core import views

    path('hello/', views.hello)

```

- Agora, vamos rodar as migrates para criação dos bancos de dados padrões do django
```bash
python manage.py migrate   
```

- Criar superadmin para acessar painel administrativo
```bash
python manage.py createsuperuser --username admin
```

- Agora, vamos criar as tabelas do App. Para isto, para navegar até models.py e inserir como classe (ver modelo).

- Depois da classe criada, é hora de executar o comando para que seja criada uma migration para que posteriormente seja inserido no banco de dados. Conforme abaixo, o paramêtro makemigrations é o comando e 'core' é o nome do app que foi criado anteriormente. Se o nome não for passado, todos os apps serão verificados.
```bash
python manage.py makemigrations core
```



- Depois do migration criado (pode ser visto na pasta migrations do respectivo app), agora é hora de começar a realizar a inserção no banco de dados. É recomendando que seja executado o comando sqlmigrates para que seja possível visualizar qual o comando SQL que o Django irá executar no banco de dados. (sqlmigrate é o parametro, 'core' é o nome do app e o '0001' é o nome da migration que foi criada)
```bash
python manage.py sqlmigrate core 0001
```
Depois de visualizado o comando e verificado que está correto, basta aplicar a alteração (migrate é o parametro, 'core' é o nome do app e o '0001' é o nome da migration que foi criada):
```bash
python manage.py migrate core 0001
```

- Agora, vamos registrar o modelo no admin.py (ver modelo no próprio arquivo)

- Para aplicar alterações na estrutura do banco de dados (após por exemplo alterar a classe), basta realizar novamente os passos de makemigration. Se a coluna em questão não tiver sido setada como null aceito, será solicitado o que deve ser feito com os valores da coluna. Primeiro será dada a opção de inserir um valor automaticamente para as colunas ou inserir manualmente. Selecionado a primeira opção, será solicitado o valor para ser inserido.
```bash
python manage.py makemigrations core
```
(sqlmigrate é o parametro, 'core' é o nome do app e o '0002' é o nome da migration que foi criada)
```bash
python manage.py sqlmigrate core 0002
```
```bash
python manage.py migrate core 0002
```

- Alterar Fuso horário, indo em settings.py e alterando as linhas abaixo:
```python

LANGUAGE_CODE = 'pt-br'

TIME_ZONE = 'Americas/Sao_Paulo'

USE_I18N = True

USE_TZ = False

```

- Para colocar em modo de produção, vá até settings.py e altere as linhas abaixo, sendo que Allowed_hosts deve conter os hosts permitidos:

```python

DEBUG = False

ALLOWED_HOSTS = ['*']

```
