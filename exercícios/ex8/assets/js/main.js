const divData = document.getElementById('dataAtual');

document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault();
    let dataAtual, dia;

    setInterval(() => {
        dataAtual = new Date();
        dia = diaDaSemana(dataAtual.getDay());
        mes = mesTraduzido(dataAtual.getMonth());
        hora = dataAtual.getHours() < 10 ? '0' + String(dataAtual.getHours()) : dataAtual.getHours();
        minuto = dataAtual.getMinutes() < 10 ? '0' + String(dataAtual.getMinutes()) : dataAtual.getMinutes();
        segundo = dataAtual.getSeconds() < 10 ? '0' + String(dataAtual.getSeconds()) : dataAtual.getSeconds();

        divData.innerHTML = `${dia}, ${dataAtual.getDate()} de ${mes} de ${dataAtual.getFullYear()},<br>${hora}:${minuto}:${segundo}`;
    }, 1000);
})

// Só porque era a proposta do exercício mesmo rs
function diaDaSemana(nDia) {
    switch(nDia) {
        case 0: return "Domingo";
        case 1: return "Segunda-feira";
        case 2: return "Terça-feira";
        case 3: return "Quarta-feira";
        case 4: return "Quinta-feira";
        case 5: return "Sexta-feira";
        case 6: return "Sábado";
        default: break           
    }
}

// O que eu realmente queria ter feito (não necessariamente é o melhor)
function mesTraduzido(nMes) {
    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[nMes];
}