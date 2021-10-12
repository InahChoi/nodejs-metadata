const express = require("express");
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoDB connect
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('Connected to mongo database!🐵🤍'))
  .catch(e => console.error(e, '📟Error connection to database📟'))

app.listen(process.env.PORT, () => {
  console.log("🕹 Server go! 🚀");
});

app.use("/", router);
