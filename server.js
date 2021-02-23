const express = require("express");
const PORT = process.env.PORT || 3500;
const products = require("./handlers/ProductsHandler");

const server = express();
server.use(express.json());

server.get("/", (reg, res) => {
  res.send("<h1> HELLOOOOOOOOOOO </h1>");
});


server.get("/products", products.getAllProducts);
server.get("/products/:id", products.getProductId);
server.get("/products/search/:name", products.getProductName);
server.get("/products/cate/:cat", products.getProductCat);

server.post("/products", products.postProduct);

server.delete("/products/:id", products.delProduct);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

/*
GET /
get user /profile/:id

POST /
post product /products/
post user /sign-up
post user /log-in
post comment /products/:comment

DELETE /
delete products /products/:id
*/
