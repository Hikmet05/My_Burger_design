const burger = document.getElementById('burger');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const logo = document.getElementById('logo');
const container = document.getElementById('container')


burger.addEventListener('click', () => {
    first.classList.toggle('firstActive');
    second.classList.toggle('secondActive');
    third.classList.toggle('thirdActive');
    logo.classList.toggle('logoActive');
    container.classList.toggle('containerActive')
})