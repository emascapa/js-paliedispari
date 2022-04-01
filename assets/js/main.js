const elementForm1 = document.querySelector('form.form_1');

const returnMessageDiv = document.querySelector('.form_1 .return_message');

// al click controllo se la parola inserita è palindroma
elementForm1.addEventListener('submit', function (event) {
    // Stop page reloading
    event.preventDefault()

    const inputWord = document.querySelector('input.form-control').value;

    console.log(`hai inserito come parola ${inputWord}`);

    if (isPalindrome(inputWord)) {
        const successMessage = `
        <span class="text-success ms-3">La parola '${inputWord}' è palindroma!</span>
        `;

        returnMessageDiv.innerHTML = successMessage;

        console.log(`'${inputWord}' è un palindromo`);

    } else {

        const successMessage = `
        <span class="text-danger ms-3">La parola '${inputWord}' non è palindroma sry</span>
        `;

        returnMessageDiv.innerHTML = successMessage;

        console.log(`'${inputWord}' non è un palindromo`);

    }
})



const elementForm2 = document.querySelector('form.form_2');

const gameResultDiv = document.querySelector('.game_result_div');

 
elementForm2.addEventListener('submit', function (event) {
    // Stop page reloading
    event.preventDefault()

    const inputTeam = parseInt(document.querySelector('select.form-select').value);

    const userNumber = parseInt(document.getElementById('custom_range').value);
    /* userNumber = parseInt(userNumber); */

    let team;

    if (inputTeam === 1) {
        team = 'pari'
    } else {
        team = 'dispari'
    }

    console.log(`hai scelto ${team}`);
    //console.log(inputTeam);
    console.log(`hai scelto il numero ${userNumber}`);

    const pcNumber = getRndInteger(1, 5);

    console.log(`il pc ha scelto il numero ${pcNumber}`);

    const sum = userNumber + pcNumber;

    console.log(`Somma ${sum}`);

    //const result = isEven(sum);

/*     if (isEven(sum) === true && inputTeam === 1) {
        console.log('hai vinto');
    } else if (isEven(sum) === false && inputTeam === 2) {
        console.log('hai vinto');
    } else {
        console.log('hai perso');
    } */
    let stringResult;

    if ((isEven(sum) === true && inputTeam === 1) || (isEven(sum) === false && inputTeam === 2)){
        console.log('hai vinto');

        stringResult = `<span class="text-success fs-4 lead fw-bold">Hai Vinto!</span>`;

    } else {
        console.log('hai perso');

        stringResult = `<span class="text-danger fs-4 lead fw-bold">Hai perso sry</span>`;
    }



    const gameResult = `
    <h3 class="">Il pc ha scelto</h3>
    <span class=" fs-5 border border-2 rounded-pill d-flex justify-content-center align-items-center px-4">${pcNumber}</span>
    <span class=" fs-5 border border-1 rounded-pill d-flex justify-content-center align-items-center px-4 bg-info">Somma: ${sum}</span>
    ${stringResult}
    `;

    gameResultDiv.innerHTML = gameResult;

})



/* FUNCTIONS HERE */

function isPalindrome(word) {
    let output;
    for (let i = 0; i < word.length; i++){
        if (word.at(i) !== word.at((word.length - 1) - i)) {

            output = false;
            break;

        } else {
     
            if (i === word.length - 1) {
                output = true;
            }
        }
    }
    
    return output;
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

