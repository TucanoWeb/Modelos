class Pessoa:
    def __init__(self, nome: str, idade: int, profissao: str, linguagens: str):
        self.nome = nome
        self.idade = idade
        self.profissao = profissao
        self.linguages = linguagens

pessoa1 = Pessoa('Eric', '34', 'Func Público e Programador', 'várias')


print(f'Meu nome é {pessoa1.nome}, tenho {pessoa1.idade}. Sou {pessoa1.profissao} e trabalho com {pessoa1.linguages} linguagens de programação.')
