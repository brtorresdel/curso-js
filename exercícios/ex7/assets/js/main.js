let [peso, altura, resultado] = [
    document.getElementById('peso'),
    document.getElementById('altura'),
    document.getElementById('resultado')
]

let imc = [
    {max: 18.5, txt: 'Abaixo do peso', cor: '#c90a00'},
    {max: 24.9, txt: 'Peso normal', cor: '#008000'},
    {max: 29.9, txt: 'Sobrepeso', cor: '#ffe16e'},
    {max: 34.9, txt: 'Obesidade grau 1', cor: '#c90a00'},
    {max: 39.9, txt: 'Obesidade grau 2', cor: '#c90a00'},
]

document.addEventListener('submit', event => {
    event.preventDefault();

    calc = calcularIMC(parseFloat(peso.value), parseFloat(altura.value)); 

    resultado.innerHTML = calc.txt;
    resultado.style.backgroundColor = calc.cor    
} )

function calcularIMC(p, a) {
    if (p <= 0 || !p || a <= 0 || !a) return {txt: 'Dados inválidos!', cor: '#c90a00'};

    let calculoIMC = p / (a * a);

    for (const faixa of imc) {
        if (calculoIMC < faixa.max) {
            return {txt: `Seu IMC é ${calculoIMC.toFixed(2)} (${faixa.txt})`, cor: faixa.cor};
        }
    }

    return {txt: `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade grau 3)`, cor: '#c90a00'};
}