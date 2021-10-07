'use strict';

console.log('I am also Alive edit.');

const dataURL = '../data/exercise1.json';
const req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send()

req.onload = () => {
    const data = req.response;
    
    const txb = document.createElement('input');
    txb.style.display = 'block';
    txb.value = data.headline;
    txb.id = 'headline';
    document.getElementById('Exercise4').appendChild(txb);
    
    const txb1 = document.createElement('input');
    txb1.style.display = 'block';
    txb1.value = data.intro;
    txb1.id = 'intro';
    document.getElementById('Exercise4').appendChild(txb1);
    
    const txb2 = document.createElement('input');
    txb2.style.display = 'block';
    txb2.value = data.articelImage;
    txb2.id = 'articelImage';
    document.getElementById('Exercise4').appendChild(txb2);
    
    const btn = document.createElement('button');
    btn.addEventListener('click', uppdate);
    btn.textContent = 'Uppdate';
    document.getElementById('Exercise4').appendChild(btn);

}

const uppdate = () => {
    console.log('Button Update pushed');
}