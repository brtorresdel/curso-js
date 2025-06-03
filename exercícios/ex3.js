// Exercício 3 - Redistribuir os valores, para que A = B, B = C e C = A

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);