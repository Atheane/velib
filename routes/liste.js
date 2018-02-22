var express = require('express');
var router = express.Router();
var velib_controller = require('../controllers/velibController');


/* GET home page. */
router.get('/', velib_controller.velib_list);

module.exports = router;

