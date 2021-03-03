const express = require("express");
const PORT = process.env.PORT || 4000;
const products = require("./handlers/ProductsHandler");
const comments = require("./handlers/CommentsHandler");
const users = require("./handlers/users");
const authUser = require("./middleware/auth");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const auth = require("./middleware/auth");

const server = express();
server.use(express.json());
server.use(errorHandler);
server.use(cors());

server.get("/", (reg, res) => {
  res.send("<h1> Welcome To e-Sketchy API </h1>");
});

// Products Requests
server.get("/products", products.getAllProducts);
server.get("/products/:id", products.getProductId);
server.get("/products/search/:name", products.getProductName);
server.get("/products/cate/:cat", products.getProductCat);
server.post("/products", products.postProduct);
server.delete("/products/:id", products.delProduct);

// Comments Requests
server.post("/comment", auth, comments.postComment);
server.delete("/comment/:id", comments.delComment);
server.get("/comments/:id", comments.getComments);

// Users Requests
server.get("/users/", users.getAll);
server.get("/users/:id", users.get);
server.post("/users", users.postUsers);
server.get("/login", users.login);
server.get("/login/me", users.getUserByToken);
server.post("/login", users.login);
server.put("/users/:id", users.put);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
