'use strict';

console.log('I am also Alive.');

const dataURL = '../data/exercise1.json';
const req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send()

req.onload = () => {
    const data = req.response;
    const head_data = data.headline;
    const intro_data = data.intro;

    const head = document.createElement('h1');
    head.textContent = head_data;
    
    const intro = document.createElement('p');
    intro.textContent = intro_data;

    document.getElementById('Exercise1').appendChild(head);
    document.getElementById('Exercise1').appendChild(intro);
}

