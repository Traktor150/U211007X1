'use strict';

const express = require('express');
const router = express.Router();

const controlerDefault = require('../controler/default');

router.get('/edit', controlerDefault.edit);
router.post('/edit', controlerDefault.update);
router.get('/', controlerDefault.home);

module.exports = router;