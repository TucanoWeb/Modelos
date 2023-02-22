NAME: str = input('Digite uma palavra: ')

controller: str = 'AEIOU'

#for atribui cada letra em NAME, a cada repetição, para verify. Depois, altera para maiúsculo em verify.upper
for verify in NAME:
    if verify.upper() in controller:
        print(verify, end='')
    
print()
