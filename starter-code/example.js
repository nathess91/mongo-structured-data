// require means import
var mongoose = require('mongoose'); // package mongoose library
mongoose.connect('mongodb://localhost/mongoRelationships');
var Schema = mongoose.Schema;

var foodSchema = new Schema({ // Model Schema -> Schema.js (Mongoose)
  name: {
    type: String, // String -> JS built in datatype (MDN)
    default: ""
  },
  ingredients: [{
    type: Schema.Types.ObjectId,  // NOTE: Referencing
    ref: 'Ingredient'
  }]
});

var ingredientSchema = new Schema({ // instance of Schema
  title: {
    type: String,
    default: ""
  },
  origin: {
    type: String,
    default: ""
  }
});

var Food = mongoose.model('Food', foodSchema); // Mongoose model

// Food - constructor
// find, findOne, find or Create

// new Food
// id, ingredients, name

// Export (node method) -- opposite of require
exports.Food = Food;
exports.Ingredient = Ingredient;
exports.User = User;
exports.Tweet = Tweet;
