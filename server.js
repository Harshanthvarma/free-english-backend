const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const lessonsRoute = require("./routes/lessons");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/lessons", lessonsRoute);

mongoose.connect("<your MongoDB URI>")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
