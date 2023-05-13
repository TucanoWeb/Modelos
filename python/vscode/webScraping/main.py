from bs4 import BeautifulSoup  # pip install beautifulsoup4
import requests  # pip install requests


# Objeto site está recebendo todo o conteúdo da requisição http feita na url informada
site = requests.get("https://tucanoweb.com.br/").content

# Aqui soup baixa o conteúdo para a memória utilizando o html.parser
soup = BeautifulSoup(site, 'html.parser')

# Prettify transforma toda a estrutura html em string e o print exibe o html
print(soup.prettify())


# Puxar o nome do site por exemplo
title = soup.title.string
print(title)


# Primeira tag como âncora
primeira_ancora = soup.a
print(primeira_ancora)


# Procurando pela palavra admin
admin = soup.find('admin')
print(admin)