var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home');

/* Home page. */
router.get('/', homeCtrl.getHome);
router.post('/', homeCtrl.sendMessage);


module.exports = router;
