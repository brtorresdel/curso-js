// Exercício 13 - Função "FizzBuzz"
/*
Número divisível por 3 = "Fizz"
Número divisível por 5 = "Buzz"
Número divisível por ambos = "FizzBuss"
Número não divisível por ambos = Próprio número
Diferente de número (tipo int) = Proprio parâmetro

Ao final, rodar um loop de 0 a 100 pra checar todos estes números
*/

function fizzBuzz(n) {
    if (typeof(n) !== 'number') return n;
    
    let retorno = '';

    n % 3 === 0 ? retorno += 'Fizz' : '';
    n % 5 === 0 ? retorno += 'Buzz' : '';

    if (retorno) return retorno;

    return n;
}

for (let i = 0; i <= 100; i++) {
    console.log(i , ' = ' , fizzBuzz(i));
}

