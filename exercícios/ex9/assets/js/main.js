const div = document.getElementById('container');
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]


document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault();

    elementos.forEach(el => div.innerHTML += `<${el.tag}>${el.texto}</${el.tag}>`);
})