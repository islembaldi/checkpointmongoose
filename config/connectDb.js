const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://mongoose:mongoose@cluster0.zxndt9k.mongodb.net/person"
    )
    .then(() => console.log("connection to database succefully ! "))
    .catch((err) => console.log(err));
};
module.exports = connect;
