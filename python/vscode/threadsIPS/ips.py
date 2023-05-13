import ipaddress

ip = '192.168.0.1'

# Converte ip string para IP com a biblioteca ipaddress
address = ipaddress.ip_address(ip)
print(address)



net = '192.168.1.254/24'

# Verifica em qual rede o respectivo ip pertence
rede = ipaddress.ip_network(net, strict=False)
print(rede)

# Imprime quais e quantos ips pertencem a rede
quantity = 1
for ip in rede:
    print(f"{quantity} - {ip}")
    quantity+=1

print(f"Quantidade de endereços disponíveis: {quantity - 3}")
