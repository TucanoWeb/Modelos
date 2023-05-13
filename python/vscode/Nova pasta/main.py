import re
import json
from urllib.request import urlopen

url = 'http://ipinfo.io/json'

resposta = urlopen(url)

dados = json.load(resposta)

# Para verificar o retorno da requisição com o objeto, contendo todas as propriedades em json, basta acessar a url

ip = dados['ip']
regiao = dados['region']

print(f"O ip {ip} está localizado em {regiao}")