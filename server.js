const express = require("express");
const connect = require("./config/connectDb");
const Person = require("./models/Person");
const app = express();
connect();
const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const addPerson = new Person({
  name: "Alice",
  age: 25,
  favoriteFoods: ["Sushi", "Salad"],
});
//addPerson.save();
const arrayOfPeople = [
  { name: "Alice", age: 25, favoriteFoods: ["Sushi", "Salad"] },
  { name: "Bob", age: 35, favoriteFoods: ["Burger", "Fries"] },
  { name: "Islem", age: 21, favoriteFoods: ["Pizza", "Fries"] },
];
Person.create(arrayOfPeople);
// Use model.find()
Person.find({ name: "Islem" }).then((data) => console.log(data));

//find by id

Person.findById("65faa2a3f2b5226a184d4b02").then((data) => console.log(data));
//update
Person.findByIdAndUpdate("65faa1082e5eefedc89ae4fd", { age: "40" }).then(
  (data) => console.log(data)
);
// update finf one
Person.findOneAndUpdate(
  { name: "Bob" },
  {
    age: 40,
  }
).then((data) => console.log(data));
//Delete
Person.findByIdAndDelete("65faa8a8355f12e23eae1b17").then((data) =>
  console.log(data)
);
