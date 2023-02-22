class Bicicletas:    
    def __init__(self, cor, modelo, ano, valor):
        
        #Atributos da classe
        self.cor = cor
        self.modelo = modelo
        self.ano = ano
        self.valor = valor
    
    def __str__(self) -> str:     
        return f"{self.__class__.__name__}: {', '.join([f'{chave} = {valor}' for chave, valor in self.__dict__.items()])}"
    
    # Métodos    
    def buzinar(self) -> str:
        return 'Buzina'
    
    def parar(self) -> str:
        return 'Parada'
    
    def correr(self) -> str:
        return 'Correndo'
    
    def listar(self):
        return self
    
    
        

bicicleta_1: Bicicletas = Bicicletas('Preta', 'Modelo 1', 2023, 1000)

print(bicicleta_1.buzinar())

print(bicicleta_1.listar()) # Com o __str__ criado na classe, eu posso simplesmente chamar self no método, que ele retorna como foi concatenado.

print(bicicleta_1) # Desta forma, retorna o resultado de __str__ automaticamente. Sem o __str__ retorna apenas a posição na memória