const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies");

  const { id } = req.params;

  const { name, info, image, rating } = req.body;

  let editedMovie;

  try {
    editedMovie = await MoviesModel.findByIdAndUpdate(id, {
      name: name,
      info: info,
      image: image,
      rating: rating,
    });
    res.status(200).json({
      message: "Movie updated",
      editedMovie: editedMovie,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
module.exports = editMovie;
