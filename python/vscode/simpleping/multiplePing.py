import os

quantity_hosts: int = int(input('Digite a quantidade de hosts para verificação: '))
array_hosts: list = []

while quantity_hosts > 0:
    value: str = input('Digite o host: ')
    array_hosts.append(value)
    
    quantity_hosts = quantity_hosts - 1

for row in array_hosts:
    os.system(f"ping {row}")
    