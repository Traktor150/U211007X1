'use strict';

exports.home = (req, res) => {
    //const data = require('../);
    //console.log(data);
    res.sendfile('public/sites/home.html');
};

exports.edit = (req, res) => {
    //const data = require('../);
    //console.log(data);
    res.sendfile('public/sites/edit.html');
};

exports.update = (req, res) => {
    // console.log('data: ' + req.body.headline);
    // console.log('data: ' + req.body.intro);
    // console.log('data: ' + req.body.articelImage);

    // hemtar in data i varibler med samma namn son nyckeln i json
    const headline = req.body.headline;
    const intro = req.body.intro;
    const articelImage = req.body.articelImage;

    // Sammlar all data i en variabel     
    const test = {headline, intro, articelImage};

    // gör om till en json string
    const testAnka = JSON.stringify(test);

    // skriver det i filen 
    const fs = require('fs');
    
    fs.writeFile('./public/data/exercise1.json', testAnka, err => {
        if (err) {
            console.error(err);
            return;
        };
    });

    res.sendfile('public/sites/edit.html');
};