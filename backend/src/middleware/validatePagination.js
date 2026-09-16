const validatePagination = (req, res, next) => {
  const page = req.query.page ? Number(req.query.page) : 1;

  if (!Number.isInteger(page) || page < 1) {
    return res.status(400).json({
      success: false,
      message: "Page must be a positive integer",
    });
  }

  req.page = page;

  next();
};

export default validatePagination;