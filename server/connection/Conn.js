const mongoose = require("mongoose");
function connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/bookingDB");
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connect;
