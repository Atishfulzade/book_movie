const express = require("express");
const app = express();
const cors = require("cors");
const client = require("./connection/Conn.js");
const { lastMovie, bookingMovie } = require("./controller/Controller.js");
app.use(express.json());
app.use(cors());
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log("DB connection error");
  }
}
run().catch(console.dir);
app.get("/api/booking", lastMovie);
app.post("/api/booking", bookingMovie);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
