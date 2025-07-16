const paragrafos = document.querySelectorAll('p');
const estilos = getComputedStyle(document.body)
;
document.addEventListener('DOMContentLoaded', e => {
    bg = estilos.backgroundColor;

    paragrafos.forEach(p => {
        p.style.backgroundColor = bg.toString();
        p.style.color = 'white';
    })
})