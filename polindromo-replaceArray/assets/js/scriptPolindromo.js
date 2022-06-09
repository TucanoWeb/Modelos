var arrayPolindromo1 = [];
var arrayPolindromo2 = [];



let entryPolindromo1;

const resultVerifyPolindromo = document.getElementById('resultVerifyPolindromo');



const buttonSelectPolindromo = document.getElementById('buttonSelectPolindromo');
buttonSelectPolindromo.addEventListener('click', selectionOption1Show);


let entryPolindromo2;

const verifyPolindromo = document.getElementById('verifyPolindromo');
verifyPolindromo.addEventListener('click', verifyPolindromoResult);


const polindromoWrapper = document.getElementById('polindromoWrapper');




function selectionOption1Show() {

    polindromoWrapper.style.removeProperty('display');
    document.getElementById('elvesWrapper').style.display = 'none';

}


function verifyPolindromoResult() {

    entryPolindromo1 = document.getElementById('entryPolindromo1').value;
    entryPolindromo2 = document.getElementById('entryPolindromo1').value;

    if (entryPolindromo1 != '') {


        arrayPolindromo2 = entryPolindromo2.split(" ");
        arrayPolindromo2 = arrayPolindromo2.join('');
        arrayPolindromo2 = arrayPolindromo2.split("");
        arrayPolindromo2 = arrayPolindromo2.reverse();


        arrayPolindromo1 = entryPolindromo1.split(" ");
        arrayPolindromo1 = arrayPolindromo1.join('');
        arrayPolindromo1 = arrayPolindromo1.split("");




        if (arrayPolindromo1.join('') == arrayPolindromo2.join('')) {

            document.getElementById('entryPolindromo2').value = "This is a Polindromo";
            resultVerifyPolindromo.style.removeProperty('display');
            document.getElementById('entryPolindromo1').style.borderColor = 'green';
            document.getElementById('entryPolindromo2').style.borderColor = 'green';



        } else {
            document.getElementById('entryPolindromo2').value = "This ins't a Polindromo";
            resultVerifyPolindromo.style.removeProperty('display');
            document.getElementById('entryPolindromo1').style.borderColor = 'red';
            document.getElementById('entryPolindromo2').style.borderColor = 'red';

        }


    } else {

        alert("The field can't is blank.")
        document.getElementById('entryPolindromo1').style.borderColor = 'red';
        document.getElementById('entryPolindromo2').value = "";
    }

}
