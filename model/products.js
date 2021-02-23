const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function getAllProducts() {
  return db.query(`SELECT * from products`).then((result) => {
    return result.rows;
  });
}

function getProductId(id) {
  return db
    .query(`SELECT * FROM products WHERE id = ($1)`, [id])
    .then((result) => {
      return result.rows;
    });
}

function getProductName(name) {
  return db
    .query(`SELECT * FROM products WHERE pro_name ILIKE $1 || '%' `, [name])
    .then((result) => {
      return result.rows;
    });
}

function getProductCat(cat) {
  return db
    .query(`SELECT * FROM products WHERE category ILIKE $1 || '%' `, [cat])
    .then((result) => {
      return result.rows;
    });
}

function addProduct(product) {
  const productDetails = [
    product.pro_name,
    product.pic_url,
    product.descr,
    product.price,
    product.category,
  ];

  return db
    .query(
      `INSERT INTO products (pro_name, pic_url, descr, price, category) VALUES ($1,$2,$3,$4,$5) returning *`,
      productDetails
    )
    .then((result) => {
      return result.rows;
    });
}

function delProduct(id) {
  return db
    .query(`DELETE FROM products WHERE id = ($1)`, [id])
    .then((result) => {
      return result;
    });
}

function updatePrice(data) {
  return db
    .query(`UPDATE product SET price = $1 WHERE id =$2`, [data.price, data.id])
    .then((result) => {
      return result;
    });
}

function updateQuantity(data) {
  return db
    .query(`UPDATE product SET quantity = $1 WHERE id =$2`, [
      data.quantity,
      data.id,
    ])
    .then((result) => {
      return result;
    });
}

module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateQuantity,
  updatePrice,
  delProduct,
  getProductName,
  getProductCat,
};
