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

        resultadoMap = arrayBase.map((valores) => valores * 2);
        resultadoPares = arrayBase.filter((valor) => valor % 2 === 0);
        resultadoReducao = arrayBase.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, valorInicial);
    }


}




function mapsemThis(item1, item2, item3, item4, item5) {

    arrayBase[0] = item1;
    arrayBase[1] = item2;
    arrayBase[2] = item3;
    arrayBase[3] = item4;
    arrayBase[4] = item5;

    resultadoMap = arrayBase.map((valores) => valores * 2);

    return resultadoMap;

}

//REDUCE





