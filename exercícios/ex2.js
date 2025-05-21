// Exercício 2: Exibir a seguinte mensagem no console:

// ~nome~ tem ~idade~ anos, pesa ~quilos~ kg, tem ~altura~ de altura, e seu IMC é de ~IMC calculado~

const [nome, idade, peso, altura] = ['Bruno Torres Rodrigues', 26, 96, 1.70];

let imc = peso / (altura ** 2)

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura.toFixed(2)} de altura, e seu IMC é de ${imc.toFixed(2)}`);