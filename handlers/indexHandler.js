const indexHandler = (req, res) => {
  res.status(200).json({
    name: "suman",
  });
};

module.exports = indexHandler;
