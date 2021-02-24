const path = require("path");
const db = require(path.join(__dirname, "..", "database", "connection"));

function addComment(cmm) {
  const comentEntry = [cmm.comment, cmm.user_id, cmm.prod_id];
  console.log("query " + comentEntry);
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
module.exports = {
  addComment,
  delComment,
};
