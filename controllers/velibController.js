var Velib = require('../models/velib');

exports.velib_list = function(req, res, next) {
  Velib.find({}, 'number name')
    .exec(function (err, list_velibs) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('velib_list', { title: 'Liste des stations de Vélib', velib_list: list_velibs });
    });
}

exports.velib_coord = function(req, res, next) {
  Velib.find({}, 'latitude longitude')
    .exec(function (err, list_coords) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('carte', { title: 'Liste des stations de Vélib', velib_coord: list_coords });
    });
}
