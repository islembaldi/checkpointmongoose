const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});
const person = mongoose.model("Person", personSchema);
module.exports = person;
