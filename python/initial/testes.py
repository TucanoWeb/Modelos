class Teste:
    def __init__(self, valor1, valor2, valor3):
        self.valor1 = valor1
        self.valor2 = valor2
        self.valor3 = valor3
        
    def print_1(self):
        print(self.valor1)
        
    def __str__(self) -> str:
        return f"{self.__class__.__name__}: {', '.join([f'{chave} = {valor}' for chave, valor in self.__dict__.items()])}"
    
    

teste1 = Teste('abc', 'asfda', 'asfda4')

print(teste1)
