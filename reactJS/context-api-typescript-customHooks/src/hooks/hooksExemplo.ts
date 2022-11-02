export const useHookExemplo = () => {

    const Soma = (num1: number, num2: number) => {
        return (num1 + num2)
    }

    return { Soma }

}

//Para importar o hook criado em uma página, ficaria como algo assim:
// 
//
//
//
//
// const { Soma } = useHookExemplo()
// 
// { Soma(10,11) }
//
// Iria imprimir para o usuário o resultado da soma, sendo 21.
//


