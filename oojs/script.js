// Cria a classe pai ContaBancaria
class contaBancaria {
    // Utilização do construtor, declarando os parâmetros na criação da nova instância. Ou seja, exemplo em um console: const minhaConta = contaBancaria new (valores dos parâmetros)
    constructor(agencia, numero) {
        //Declara os valores que atributos do objeto, que no caso são agencia, numero, tipo e _saldo irão receber. O this se refere sempre ao objeto, que no caso é contaBancaria.
        this.agencia = agencia;
        this.numero = numero;


        // O underline é utilizado devido ao fato de utilizarmos get e set manipulação de valores, como se vê mais abaixo
        this._saldo = 0;

    }

    // Recupera valor de saldo
    get saldo() {
        return this._saldo;  //Retorna o valor de saldo
    }

    // saldo já foi difinido mais acima, em this._saldo = 0, no entanto, essas linhas parmenecem para cunho didático
    set saldo(valor) {
        this._saldo = valor;
    }

    // Foi atribuído o parâmetro valor em sacar, no qual é verificado 
    sacar(valor) {
        if (valor > this._saldo) {
            return 'Saldo insuficiente';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = valor + this._saldo;

        return this._saldo;
    }

}

// Cria a classe filha contaCorrente de classe pai contaBancaria
class contaCorrente extends contaBancaria {
    //consructor recebe os parâmetros da classe pai contaBancaria
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero); //manda valor dos parâmetros para a classe pai que seta para a classe filha contaCorrente

        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    // O bloco getter/setter nesse caso não é realmente necessário, pois não há uma função de manipulação do valor do atributo cartaoCredito. No entanto, fica para cunho didático, para reforçar a necessidade do _ (underline) para atributos desse bloco, como se vê acima.
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;

        return this._cartaoCredito;
    }

}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)

        this.tipo = "Conta Poupança";
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Conta Universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Excede valor permitido";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

}