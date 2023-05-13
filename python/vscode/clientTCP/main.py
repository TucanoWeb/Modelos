import socket
import sys


def main():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
    except socket.error as error:
        print(f"A conexão falou com o erro {error}")
        sys.exit()  # Fecha o programa utilizando o exit() do próprio python

    print("Socket criado com sucesso!")

    hostAlvo = input("Digite o host: ")
    portaAlvo = int(input("Digite a porta: "))

    try:
        s.connect((hostAlvo, portaAlvo))
        print("Cliente TCP conectado com sucesso!")
        s.shutdown(2)
    except socket.error as error:
        print(f"A conexão não foi estabelecida com o erro {error}")
        sys.exit()

if __name__ == "__main__":
    main()

