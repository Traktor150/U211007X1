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
    const img_data = data.articelImage;

    const head = document.createElement('h1');
    head.textContent = head_data;
    document.getElementById('Exercise1').appendChild(head);
    
    const intro = document.createElement('p');
    intro.textContent = intro_data;
    document.getElementById('Exercise1').appendChild(intro);
    
    const img = document.createElement('img');
    img.id = 'showing';
    img.src = '/img/' + img_data;

    
    const btn = document.createElement('button');
    btn.id = 'show/hide';
    btn.addEventListener('click', img_hide );
    btn.textContent = 'hide';
    document.getElementById('Exercise1').appendChild(btn);
    
    
    document.getElementById('Exercise1').appendChild(img);


}

const img_hide = () => {
    const swan = document.getElementById('showing');
    const button = document.getElementById('show/hide');

    if(swan.style.display == 'none') {
        swan.style.display = 'block';
        button.textContent = 'hide';
    }
    else {
        swan.style.display = 'none';
        button.textContent = 'show';
    }
}