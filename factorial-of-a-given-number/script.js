let input = prompt('Enter a number');
let result = document.getElementById('result');
let fact = 1;

if (input < 0) {
    result.innerHTML += 'Factorial of a negative number does not eists';
} else if(input == 0) {
    result.innerHTML += 'Factorial of 0 is 1';
} else if (input > 0) {
    for (let i = 1; i <= input; i++) {
        fact = fact * i;
    }
    result.innerHTML += 'Factorial of ' + input + ' is ' + fact;
}