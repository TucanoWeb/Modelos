const buttonSelectElves = document.getElementById('buttonSelectElves');
buttonSelectElves.addEventListener('click', buttonSelectElvesShow);

const replaceElvesButton = document.getElementById('replaceElvesButton');
replaceElvesButton.addEventListener('click', replaceElvesFunction);



function buttonSelectElvesShow() {

    document.getElementById('elvesWrapper').style.removeProperty('display');
    document.getElementById('polindromoWrapper').style.display = 'none';

}

let entryElves;
let arrayElves;
let arrayElvesReplace;
let arrayElvesPush = [];


function replaceElvesFunction() {

    entryElves = document.getElementById('entryElves').value;
    arrayElves = entryElves.split('');
    arrayElvesReplace = arrayElves.map(Number);


    if (arrayElvesReplace.includes(NaN)) {

        alert('Only numbers is allowed')
        document.getElementById('entryElves').value = '';
        document.getElementById('resultElves').value = '';

    } else {


        verifyAndReplace();

    }

}

function verifyAndReplace() {

    for (let i = 0; i <= arrayElvesReplace.length - 1; i++) {

        if (arrayElvesReplace[i] % 2 == 0) {

            arrayElvesPush[i] = 'Par';
        } else {

            arrayElvesPush[i] = arrayElvesReplace[i];
        }
    }

    insertValueField2();

}


function insertValueField2() {

    document.getElementById('resultElves').value = arrayElvesPush;

}