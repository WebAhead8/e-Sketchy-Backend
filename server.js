const express = require("express");
const PORT = process.env.PORT || 3000;
const products = require("./handlers/ProductsHandler");
const comments = require("./handlers/CommentsHandler");
const server = express();
server.use(express.json());

server.get("/", (reg, res) => {
  res.send("<h1> HELLOOOOOOOOOOO </h1>");
});

// Products Requests
server.get("/products", products.getAllProducts);
server.get("/products/:id", products.getProductId);
server.get("/products/search/:name", products.getProductName);
server.get("/products/cate/:cat", products.getProductCat);
server.post("/products", products.postProduct);
server.delete("/products/:id", products.delProduct);

server.post("/comment", comments.postComment);
server.delete("/comment/:id", comments.delComment);

// Users Requests
// server.get("/users/:id", users.get);
// server.post("/users", users.post);
// server.post("/login", users.login);
// server.put("/users/:id", users.put);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
