const validateUrl = (req, res, next) => {
  const { url, alias } = req.body;

  // URL validation
  if (typeof url !== "string" || !url.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please enter a URL",
    });
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return res.status(400).json({
      success: false,
      message:
        "Please enter a valid URL starting with http:// or https://",
    });
  }

  if (url.length > 2048) {
    return res.status(400).json({
      success: false,
      message: "URL is too long",
    });
  }

  // Alias validation
  if (alias && !/^[a-zA-Z0-9-]+$/.test(alias)) {
    return res.status(400).json({
      success: false,
      message:
        "Alias can only contain letters, numbers, and hyphens",
    });
  }

  if (alias && alias.length > 12) {
    return res.status(400).json({
      success: false,
      message: "Alias must be at most 12 characters long",
    });
  }

  next();
};

export default validateUrl;