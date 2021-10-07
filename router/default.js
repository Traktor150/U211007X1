'use strict';

const express = require('express');
const router = express.Router();

const controlerDefault = require('../controler/default');

router.get('/', controlerDefault.home);

module.exports = router;