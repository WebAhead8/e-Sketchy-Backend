const express = require("express");
const PORT = process.env.PORT || 4000;
const products = require("./handlers/ProductsHandler");
const comments = require("./handlers/CommentsHandler");
const users = require("./handlers/users");
const authUser = require("./middleware/auth");
const errorHandler = require("./middleware/error");

const server = express();
server.use(express.json());
server.use(errorHandler);

server.get("/", (reg, res) => {
  res.send("<h1> Welcome To e-Sketchy API </h1>");
});

// Products Requests
server.get("/products", products.getAllProducts);
server.get("/products/:id", products.getProductId);
server.get("/products/search/:name", products.getProductName);
server.get("/products/cate/:cat", products.getProductCat);
server.post("/products", authUser, products.postProduct);
server.delete("/products/:id", authUser, products.delProduct);

// Comments Requests
server.post("/comment", authUser, comments.postComment);
server.delete("/comment/:id", authUser, comments.delComment);

// Users Requests
server.get("/users/:id", users.get);
server.post("/users", authUser, users.postUsers);
server.get("/login", users.login);
server.put("/users/:id", authUser, users.put);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
