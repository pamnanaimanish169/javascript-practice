// Fibonacci series upto n terms
let input = prompt('Enter a number');
let result = document.getElementById('result');

let n1 = 0;
let n2 = 1;
let nextTerm;

for (let i = 1; i <= input; i++) {
    result.innerHTML += n1 + ' ';
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}