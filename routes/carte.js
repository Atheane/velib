var express = require('express');
var router = express.Router();
var velib_controller = require('../controllers/velibController');

/* GET /carte/. */
router.get('/', velib_controller.velib_coord);

module.exports = router;
