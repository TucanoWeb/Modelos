import time

class Carros():
    def __init__(self) -> None:
        pass

    @classmethod
    def carro1(self, velocidade):
        trajeto = 0
        while trajeto <= 100:
            print('Carro1: ', trajeto)
            trajeto+=velocidade
        print('\n#########################')
            
    @classmethod
    def carro2(self, velocidade):
        trajeto = 0
        while trajeto <= 100:
            print('Carro2: ', trajeto)
            trajeto+=velocidade
        print('\n#########################')

            
    @classmethod
    def carroParalelo(self, velocidade, piloto):
        trajeto = 0
        while trajeto <= 100:
            print(f"{piloto}: {trajeto}")
            trajeto+=velocidade
        print('\n#########################')
        print(f"\n>>>{piloto} chegou")
        print('\n#########################')
        
        
        
        