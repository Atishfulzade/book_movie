const Booking = require("../model/bookingSchema.js");
const firstPage = () => {
  console.log("First Page");
};
const bookingMovie = async (req, res) => {
  const bookMyShow = new Booking({
    movie: req.body.movie,
    seats: req.body.seats,
    slot: req.body.slot,
  });
  try {
    const newBooking = await bookMyShow.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const lastMovie = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { firstPage, lastMovie, bookingMovie };
