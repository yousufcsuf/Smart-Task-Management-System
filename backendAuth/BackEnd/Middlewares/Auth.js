const jwt = require("jsonwebtoken");
JWT_SECRET = "secret-123";
const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }

  try {
    const decoded = jwt.verify(auth, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "unauthorized, JWT token wrong or expired" });
  }
};

module.exports = { ensureAuthenticated };
