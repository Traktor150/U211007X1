'use strict';

console.log('I am also Alive edit.');

// Frågar efter datan som är i jasonfilen.
const dataURL = '../data/exercise1.json';
const req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send()

// skapar det som behövs när datan kommer 
req.onload = () => {
    const data = req.response; // lägger datan i en variabel
    
    // skapar en form som kommer hantera postrequesten till servern
    const inpitForm = document.createElement('form');
    inpitForm.id = 'datasorce'; 
    inpitForm.action = '/edit'; // Vart den skickar requesten 
    inpitForm.method = 'POST'; // vilken metod den använder
    // lägger in det i formuläret (kan inte lägga in saker i den annars)
    document.getElementById('Exercise4').appendChild(inpitForm); 
    
    const txb = document.createElement('input');
    txb.style.display = 'block';
    txb.value = data.headline;
    txb.id = 'headline';
    txb.name = 'headline';
    document.getElementById('datasorce').appendChild(txb);
    
    const txb1 = document.createElement('input');
    txb1.style.display = 'block';
    txb1.value = data.intro;
    txb1.id = 'intro';
    txb1.name = 'intro';
    document.getElementById('datasorce').appendChild(txb1);
    
    const txb2 = document.createElement('input');
    txb2.style.display = 'block';
    txb2.value = data.articelImage;
    txb2.id = 'articelImage';
    txb2.name = 'articelImage';
    document.getElementById('datasorce').appendChild(txb2);
    
    const btn = document.createElement('input');
    btn.type = 'submit';
    btn.textContent = 'Update';
    document.getElementById('datasorce').appendChild(btn);

    
}
