let input = prompt('Enter a number');

let result = document.getElementById('result');
let isPrime = true;

if (input === 1) {
    result.innerHTML +=  input + ' is niehter Prime nor non-prime';
} else if(input > 1) {
    for(let i = 2; i < input ; i++) {
        if (input % i == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        result.innerHTML += input + ' is prime';
    } else {
        result.innerHTML += input + ' is not prime';
    }
}