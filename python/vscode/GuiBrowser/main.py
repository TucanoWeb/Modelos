import webbrowser
from tkinter import *

# Aqui determina que será uma ferramenta gráfica recebendo Tk de tkinter
root = Tk()

# Nome da janela
root.title('Abrir Browser')
# Tamanho da janela
root.geometry('300x200')

def google():
    webbrowser.open('www.google.com.br')

# cria um botão e determina o que ele faz e onde está localizado
my_google = Button(root, text='Abrir o Google', command=google).pack(pady=20)

root.mainloop()
