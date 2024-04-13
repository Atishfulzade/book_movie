const express = require("express");
const cors = require("cors");
const client = require("./connection/Conn.js");
const {
  firstPage,
  lastMovie,
  bookingMovie,
} = require("./controller/Controller.js");

const app = express();

app.use(cors());
app.use(express.json());

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

run().catch(console.error);
app.get("/", firstPage);
app.get("/api/booking", lastMovie);
app.post("/api/booking", bookingMovie);

const PORT = process.env.PORT || 3000; // Use the port defined by environment variable or default to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
