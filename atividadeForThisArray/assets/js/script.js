let notas = [];
let posicaoArray = 0;
let controlador = 1;
let mediaFinal = 0;
let listaFinalAlunos = [];
let alunos = [];
let contArray = 0;

let entradaNome = prompt('Insira o nome do Aluno: ');
let entradaNota = Number(prompt('Insira a nota do Aluno: '));


alunos[posicaoArray] = {
    nome: entradaNome,
    nota: entradaNota
};

notas[posicaoArray] = entradaNota;
posicaoArray++;

do {

    entradaNome = prompt('Insira o nome do Aluno ou digite "sair" para finalizar: ');

    if (entradaNome == 'sair') {

        (() => {

            let calculoMediaNota = notas.reduce((prev, current) => prev + current, 0) / controlador;
            mediaFinal = calculoMediaNota;
            listaFinal();

        })();

    } else {


        entradaNota = Number(prompt('Insira a nota do Aluno: '));

        alunos[posicaoArray] = {
            nome: entradaNome,
            nota: entradaNota
        };

        notas[posicaoArray] = entradaNota;

        posicaoArray++;
        controlador++;

    }

} while (entradaNome != 'sair');


function listaFinal() {

    for (let i = 0; i <= notas.length - 1; i++) {

        //Também é possível utilizar o objetc destructuring, fazendo com que os valores sejam acessíveis através da declaração de suas chaves, acessados através de um índice do array, conforme abaixo

        //const {nome, nota} = alunos[i];
        
        //if (nota >= mediaFinal) {
        //    listaFinalAlunos[contArray] = alunos[i];
        //    contArray++;
        //   }


        if (alunos[i].nota >= mediaFinal) {
            listaFinalAlunos[contArray] = alunos[i];
            contArray++;
        }
    }

    return console.log(listaFinalAlunos);

}


