var number1 = prompt('Digite o primeiro número: ');
var number2 = prompt('Digite o segundo número: ');

var result = parseInt(number1) + parseInt(number2);
var resultSame;
var resultNumbersDez;
var resultNumbersVinte;


if (number1 == number2) {

    resultSame = 'iguais';
} else {
    resultSame = 'diferentes';
}

if (result > 10) {
    resultNumbersDez = 'maior';

} else {
    resultNumbersDez = 'menor';
}

if (result < 20) {
    resultNumbersVinte = 'menor';
} else {
    resultNumbersVinte = 'maior';
}


alert(`Os números ${number1} e ${number2} são ${resultSame}. Sua soma é ${result}, que é ${resultNumbersDez} que 10 e ${resultNumbersVinte} que 20.`)