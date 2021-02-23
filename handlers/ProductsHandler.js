const model = require("../model/products");

function getAllProducts(req, res, next) {
  model
    .getAllProducts()
    .then((product) => {
      res.send(product);
    })
    .catch(next);
}

function getProductId(req, res, next) {
  const id = req.params.id;
  model
    .getProductId(id)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
}

function getProductName(req, res, next) {
  const name = req.params.name;
  model
    .getProductName(name)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
}

function getProductCat(req, res, next) {
  const cat = req.params.cat;
  model
    .getProductCat(cat)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
}

function postProduct(req, res, next) {
  const newProd = req.body;
  model
    .addProduct(newProd)
    .then((product) => {
      res.status(201).send(product);
    })
    .catch(next);
}

function delProduct(req, res, next) {
  const id = req.params.id;
  model
    .delProduct(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
}

module.exports = {
  getAllProducts,
  getProductId,
  getProductName,
  getProductCat,
  postProduct,
  delProduct,
};
