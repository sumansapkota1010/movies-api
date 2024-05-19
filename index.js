const express = require("express");
const mongoose = require("mongoose");
const indexHandler = require("./handlers/indexHandler");
const getMovies = require("./handlers/getMovies");
const createMovie = require("./handlers/createMovie");
const editMovie = require("./handlers/editMovie");
const deleteMovie = require("./handlers/deleteMovie");

require("dotenv").config();

//import all models

require("./models/movies.model");

const app = express();

app.use(express.json());

//DB connection

const mongo_connect = process.env.MONGO_URL;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("DB connection failed");
  });

//Routes

app.get("/", indexHandler);

//More routes
//Read
app.get("/movies", getMovies);
// Create
app.post("/movies", createMovie);
//Edit
app.put("/movies/:id", editMovie);
//Delete
app.delete("/movies/:id", deleteMovie);

app.listen(8000, () => {
  console.log("Server started");
});
