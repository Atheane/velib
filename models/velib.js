var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VelibSchema = new Schema(
  {
    number: {type: Number},
    name: {type: String},
    latitude: {type: Number, required: true, max: 100},
    longitude: {type: Number, required: true, max: 100}
  }, {collection: 'velib'}
);

module.exports = mongoose.model('Velib', VelibSchema);


