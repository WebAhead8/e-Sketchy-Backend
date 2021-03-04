const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function addComment(cmm) {
  ///the error come from here--> the comment in the function is array and take three values, wait for bushra to finish the login
  const comentEntry = [cmm.comment, cmm.user_id, cmm.prod_id];
  console.log("query ", comentEntry);
  return db
    .query(
      `INSERT INTO comments (comment,user_id,prod_id) VALUES ($1,$2,$3) returning *`,
      comentEntry
    )
    .then((result) => {
      return result.rows;
    });
}

function delComment(id) {
  return db
    .query(`DELETE FROM comments WHERE id = ($1)`, [id])
    .then((result) => {
      return result;
    });
}

function getComments(prod_id) {
  return db
    .query(
      `SELECT prod_id,user_id,username,comment 
    FROM comments
    INNER JOIN users ON comments.user_id = users.id
     WHERE prod_id = ($1)`,
      [prod_id]
    )
    .then((result) => {
      return result.rows;
    });
}

module.exports = {
  addComment,
  delComment,
  getComments,
};
