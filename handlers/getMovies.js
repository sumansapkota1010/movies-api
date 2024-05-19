const { mongoose } = require("mongoose");

const getMovies = async (req, res) => {
  const movieModel = mongoose.model("movies");

  try {
    const getMovies = await movieModel.find();

    res.status(200).json({
      message: "All movies",
      getMovies: getMovies,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = getMovies;
