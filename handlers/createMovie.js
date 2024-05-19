const mongoose = require("mongoose");

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies");

  const { name, info, image, rating } = req.body;

  //validations..

  /*  try {
    if (!name) throw "Name is required";

    if (name.length < 3) throw "Movie length must be at least 3 character long";
    if (!info) throw "Info must be provided";
    if (rating < 0 || rating > 0) throw "Rating must be between 0-10";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  } */

  let createdMovie;

  try {
    createdMovie = await MoviesModel.create({
      name: name,
      info: info,
      image: image,
      rating: rating,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
    return;
  }

  res.status(400).json({
    message: "movie was created",
    createdMovie: createdMovie,
  });
};

module.exports = createMovie;
