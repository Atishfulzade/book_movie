const mongoose = require("mongoose");
require("dotenv").config();
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "movie-booking", // Specify your database name
    });
    console.log("Database connection established");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

module.exports = connect;
