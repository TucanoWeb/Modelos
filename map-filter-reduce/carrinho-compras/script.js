var produtos = [];
var cesta = [];
var valorCesta = [];
var saldoFinal = 0;

class listaPrecos {
    constructor(tv, geladeira, fogao, armario) {

        this.tv = tv;
        this.geladeira = geladeira;
        this.fogao = fogao;
        this.armario = armario;

        this._saldo = 0;

        produtos[0] = this.tv;
        produtos[1] = this.geladeira;
        produtos[2] = this.fogao;
        produtos[3] = this.armario;


    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

    colocarCesta(item) {
        cesta[item] = produtos[item];

        
        valorCesta = cesta.reduce((valorInicial, valorAtual) => valorInicial + valorAtual, 0);


        return cesta;
    }

    pagar(valor) {

        if (valor > this._saldo) {
            return "Saldo insuficiente";
        }

        saldoFinal = this._saldo - valorCesta;

        return "Pagamento realizado. Seu saldo final é de: " + saldoFinal;

    }



}

