const express = require("express");
const cors = require("cors");
const {
  firstPage,
  lastMovie,
  bookingMovie,
} = require("./controller/Controller.js");
const connect = require("./connection/Conn.js");

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.get("/", firstPage);
app.get("/api/booking", lastMovie);
app.post("/api/booking", bookingMovie);

const PORT = process.env.PORT || 3000; // Use the port defined by environment variable or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
