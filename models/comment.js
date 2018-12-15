var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var comment = new Schema({
  text: {
    type: String,
    required: true
  }
});
