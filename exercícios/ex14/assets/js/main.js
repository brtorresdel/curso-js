const timer = document.getElementById('timer');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');
let tempo;

iniciar.addEventListener('click', e => {tempo = iniciarTimer()});
pausar.addEventListener('click', e => {pausarTimer(tempo)});
zerar.addEventListener('click', e => {zerarTimer(tempo)});

function iniciarTimer() {
    timer.style.color = 'black';
    let t;
    let [hora, minuto, segundo] = timer.textContent.split(':');

    return setInterval(() => {

        if (parseInt(segundo) < 59) {
            segundo = parseInt(segundo) >= 9 ? String(parseInt(segundo) + 1) : '0' + String(parseInt(segundo) + 1);
        } else if(parseInt(minuto) < 59) {
            segundo = '00';
            minuto = parseInt(minuto) >= 9 ? String(parseInt(minuto) + 1) : '0' + String(parseInt(minuto) + 1);
        } else {
            segundo = '00';
            minuto = '00';
            parseInt(hora) >= 9 ? String(parseInt(hora) + 1) : '0' + String(parseInt(hora) + 1);
        }

        timer.textContent = `${hora}:${minuto}:${segundo}`;
    }, 1000);
}

function pausarTimer(t) {
    timer.style.color = 'red';
    clearInterval(t);
}

function zerarTimer(t) {
    timer.style.color = 'black';
    timer.textContent = '00:00:00';
    clearInterval(t);
}