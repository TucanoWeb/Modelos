let nome = prompt('Digite o nome da pessoa: ');
let idade = Number(prompt(`Digite a idade de ${nome}`));
let dataFutura = Number(prompt('Deseja realizar o cálculo de idade para qual ano? '));

let anoAtual = 2022;

let pessoa = {

    nome: nome,
    idade: idade
}


let anos = dataFutura - anoAtual;


function calculaIdade() {

    return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`);
}

calculaIdade.call(pessoa);

//A função também pdoe ser chamada através do apply, com a diferença que os valores repassados devem ser enviados com colchetes. Exemplo:

// calculaIdade.apply(pessoa, [10]); O valor seria um parâmetro da função, caso houvesse. exemplo: function calcudaIdade(anos), sendo que pessoa seria o objeto chamado e o número entre colchetes o valor para anos. Nesse exemplo, se fosse utilizado o método call, poderia ser repassado apenas com o número 10, sem colchetes, exemplo: calculaIdade.call(pessoa, 10)