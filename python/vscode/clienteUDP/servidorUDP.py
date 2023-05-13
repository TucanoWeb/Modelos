from services.connection import connectSocket

s = connectSocket.connectUDP()
print("Socket criado com sucesso")

host = "localhost"
port = 5432

s.bind((host, port))
mensagem = "Servidor: Olá cliente"

# Faz com que o servidor fique rodando, pois o valor 1(verdadeiro) foi inserido como hardcode
while 1:
    dados, end = s.recvfrom(4096)

    if dados:
        print("Servidor enviando mensagem...")
        s.sendto(dados + (mensagem.encode()), end)
