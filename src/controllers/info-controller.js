const info = (req, res) => {
  return res.json({
    success: true,
    message: "API is live",
    data: {},
    error: {},
  });
};

module.exports = { info };
