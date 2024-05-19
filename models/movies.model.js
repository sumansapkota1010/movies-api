const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be 3 char long"],
  },
  info: {
    type: String,
    required: [true, "Name is required"],
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    validate: {
      validator: (value) => {
        if (value < 0 || value > 10) return false;
      },
      message: "Must be between 0-10",
    },
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
