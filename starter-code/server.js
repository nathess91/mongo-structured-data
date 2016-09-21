var db = require('./models.js');

// 1) Create a user

var newUser = new db.User({name: "Sam I Am"});
newUser.save();

// 2) Create tweets embedded in that user
var tweet1 = new db.Tweet({body: "Opossums"});
var tweet2 = new db.Tweet({body: "Rainforest Penguins"});
newUser.tweets.push(tweet1, tweet2);
newUser.save();

// 3) List all the users

db.User.find({}, function(err, users){
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listing all users:");

  if (users.length == 0) {
    console.log("No users! Empty array!");
  }
  console.log(JSON.stringify(users, true));
});

// 4) List all tweets of a specific user

db.User.findOne({name: "Sam I Am"}, function(err, user){
  console.log(user.tweets);
});

// 5) Create several ingredients
var ingred1 = new db.Ingredient({title: "Ketchup Packets", origin: "McDonalds"});
ingred1.save();
var ingred2 = new db.Ingredient({title: "Lettuce", origin: "Safeway"});
ingred2.save();
var ingred3 = new db.Ingredient({title: "Tomato", origin: "Whole Foods"});
ingred3.save();
var ingred4 = new db.Ingredient({title: "Salt", origin: "Table"});
ingred4.save();
var ingred5 = new db.Ingredient({title: "Vanilla", origin: "Madagascar"});
ingred5.save();

// 6) Create a food that references those ingredients

var newFood = new db.Food({name: "Salad"});
newFood.ingredients.push(ingred2._id, ingred3._id);
newFood.save();

// 7) List all the Foods

db.Food.find({}, function(err, foods) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listing all foods:");

  if (foods.length == 0) {
    console.log("No foods! Empty array!");
  }
  console.log(JSON.stringify(foods, true));
});

// 8) List all the ingredients in a Food

db.Ingredient.find(
  {
    _id: {$in: newFood.ingredients}
  },
  function(err, ingredients){
    console.log(JSON.stringify(ingredients, true));
  }
);
