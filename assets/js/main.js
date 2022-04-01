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

    const inputTeam = document.querySelector('select.form-select').value;

    const userNumber = document.getElementById('custom_range').value;

    console.log(`hai scelto team ${inputTeam}`);
    console.log(inputTeam);
    console.log(`hai scelto il numero ${userNumber}`);

    const pcNumber = getRndInteger(1, 5);

    const sum = userNumber + pcNumber;

    const result = isEven(sum);

    if (result && inputTeam === 1) {

    } else if () {
        
    } else if () {

    } else if () {

    }


})





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

/* function playOddsEvens(userNumber, team) {
    const pcNumber = getRndInteger(1, 5);
    const sum = userNumber + pcNumber;

    if (sum % 2 === 0 && )
} */

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isEven(7));
console.log(isEven(8));
console.log(isEven(1256));