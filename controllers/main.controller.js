const indexRoute = (req, res) => {
  const params = req.query;

  res.status(200).json({
    message: `ok`,
  });
};

module.exports = {
  indexRoute,
};
