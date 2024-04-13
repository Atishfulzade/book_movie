const mongoose = require("mongoose");

// Define the schema for the booking document
const bookingSchema = new mongoose.Schema({
  movie: String,
  seats: String,
  slot: String,
});

// Create and export the Mongoose model
module.exports = mongoose.model("Booking", bookingSchema);
