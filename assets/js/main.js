

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


console.log(isPalindrome('anna'));
console.log(isPalindrome('piccolo'));
console.log(isPalindrome('ava'));
console.log(isPalindrome('eva'));
console.log(isPalindrome('ediolognomomongoloide'));



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