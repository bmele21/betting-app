//IMPORTS
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();
const router = require("./routes/betRoutes");
const path = require('path')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.use(router);

app.use(userRouter);

app.use(express.static(path.join(__dirname, "dist")));

//dbconnection
mongoose
  .connect(process.env.dburl, {
    autoIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5200);
    console.log("connected");
  })
  .catch((err) => {
    console.log("something went wrong");
    console.log(err);
  });
