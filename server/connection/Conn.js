const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://atishfulzade1234:KMx0rmWbcR2jkE6J@api-movie.mojcktp.mongodb.net/?retryWrites=true&w=majority&appName=api-movie",
      {
        dbName: "movie-booking", // Specify your database name
      }
    );
    console.log("Database connection established");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

module.exports = connect;
