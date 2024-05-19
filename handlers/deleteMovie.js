const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");

  const { id } = req.params;

  let deletedMovie;

  try {
    deletedMovie = await movieModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Movie deleted",
      deletedMovie: deletedMovie,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = deleteMovie;
