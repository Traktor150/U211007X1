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