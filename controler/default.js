'use strict';

exports.home = (req, res) => {
    //const data = require('../);
    //console.log(data);
    res.sendfile('public/home.html');
};

