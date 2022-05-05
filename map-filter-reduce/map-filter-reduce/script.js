var arrayBase = [];
var resultadoMap = 0;
var resultadoPares = 0;
var resultadoReducao = 0;
var valorInicial = 0;


class numerosPai {
    constructor(valor1, valor2, valor3, valor4, valor5) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.valor3 = valor3;
        this.valor4 = valor4;
        this.valor5 = valor5;

        arrayBase[0] = this.valor1;
        arrayBase[1] = this.valor2;
        arrayBase[2] = this.valor3;
        arrayBase[3] = this.valor4;
        arrayBase[4] = this.valor5;

        //MAP. Através da arrow function, pega-se os valores da array de arrayBase e multiplica, cada um deles, por 2.
        resultadoMap = arrayBase.map((valores) => valores * 2);

        //FILTER. No código abaixo, através da arrow function, foi atribuído o parâmetro valor (mas pode ser qualquer outro nome) que retorna a verificação, em cada item da array, se a divisão por 2 retorna 0. Se for, ele pega o valor e atribui para resultadoPares.
        resultadoPares = arrayBase.filter((valor) => valor % 2 === 0);

        //REDUCE. Pega o valor da arrayBase e através da arrow function define os parâmetros prev e atual, entre parentese. Logo depois, define o retorno do valor somando o valor de prev + atual, sendo o valorInicial definido como zero. Na função abaixo, considerando a arrayBase[1,2,3,4,5], valorAnterior (no primeiro loop) será 1 e valorAtual será 2. No primeiro loop, vai somar index[0] + index[1], no segundo loop, vai somar index[1], que passará a ser o valorAnterior + index[2]... e assim por diante. Portanto, no exemplo abaixo temos arrayBase definindo a array, dentro de arrow function, no primeiro parenteses, os parâmetros da função, logo após o valor que ele irá retornar (=>), sendo a soma do valorAnterior e ValorAtual.
        resultadoReducao = arrayBase.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, valorInicial);
    }


}



//MAP sem criação de classe.
function mapsemThis(item1, item2, item3, item4, item5) {

    arrayBase[0] = item1;
    arrayBase[1] = item2;
    arrayBase[2] = item3;
    arrayBase[3] = item4;
    arrayBase[4] = item5;

    resultadoMap = arrayBase.map((valores) => valores * 2);

    return resultadoMap;

}