const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const model = require("../model/users");

dotenv.config();
const SECRET = process.env.JWT_SECRET;

function verifyUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const error = new Error("Authorization header is required");
    error.status = 400;
    next(error);
  } else {
    const token = authHeader.replace("Bearer ", "");
    try {
      const tokenData = jwt.verify(token, SECRET);
      model
        .getUserById(tokenData.user)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch(next);
    } catch (error_we_dont_use) {
      const error = new Error("Unauthorized");
      error.status = 401;
      next(error);
    }
  }
}

module.exports = verifyUser;
