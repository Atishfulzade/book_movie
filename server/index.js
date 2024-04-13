const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./connection/Conn.js");
const { lastMovie, bookingMovie } = require("./controller/Controller.js");
app.use(express.json());
app.use(cors());
connect();
app.get("/api/booking", lastMovie);
app.post("/api/booking", bookingMovie);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
