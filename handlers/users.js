const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const model = require("../model/users");

dotenv.config();
const SECRET = process.env.JWT_SECRET;

function getAll(req, res, next) {
  model
    .getAllUser()
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}

function get(req, res, next) {
  const id = req.params.id;
  model
    .getUserById(id)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
}

function postUsers(req, res, next) {
  const userData = req.body;
  console.log("printing user data from users ", req.body);
  model
    .createUser(userData)
    .then((user) => {
      const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
      console.log({ user: user.id });
      const response = {
        username: user.username,
        user_pass: user.user_pass,
        email: user.email,
        loc: user.loc,
        access_token: token,
      };
      res.status(201).send(response);
    })
    .catch(next);
}

function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.user_pass;
  model
    .getUser(email)
    .then((user) => {
      if (password !== user.user_pass) {
        const error = new Error("Unauthorized");
        error.status = 401;
        next(error);
      } else {
        const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
        res.status(200).send({ access_token: token, user: user.username });
      }
    })
    .catch(next);
}

function put(req, res, next) {
  const userId = req.params.id;
  const newUser = req.body;
  model
    .getUserById(userId)
    .then((user) => {
      model.updateUser(userId, newUser).then((user) => {
        res.status(200).send(user);
      });
    })
    .catch(next);
}

function getUserByToken(req, res, next) {
  const token = req.headers.authorization;
  const userID = jwt.verify(token, process.env.JWT_SECRET);
  model
    .getUserById(userID.user)
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        const error = new Error("no user Found");
        error.status = 404;
        next(error);
      }
    })
    .catch(next);
}

module.exports = { get, getAll, postUsers, login, put, getUserByToken };
