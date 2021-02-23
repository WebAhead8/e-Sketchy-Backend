// const db = require("../database/db");
const db = require("../database/connection");

function createUser(user) {
  const values = [user.username, user.user_pass, user.email, user.loc];
  return db.query(
    "INSERT INTO users(username, user_pass, email,loc) VALUES($1, $2, $3,$4)",
    values
  );
}

function getUser(email) {
  const values = [email];
  return db.query("select * from users where email=$1", values).then((rows) => {
    if (!rows.length) throw new Error(`No user with email '${email}' found`);
    // return rows[0];
  });
}

function getUserById(id) {
  const values = [id];
  return db.query("select * from users where id=$1", values).then((rows) => {
    if (!rows.length) throw new Error(`No user with id '${id}' found`);
    // return rows[0];
  });
}

function updateUser(id, newUser) {
  const values = [
    id,
    newUser.username,
    newUser.user_pass,
    newUser.email,
    newUser.loc,
  ];
  return {
    db: query("select * from users where id=$1", values).then((rows) => {
      if (!rows.length) throw new Error(`No user with id '${id}' found`);
      // return rows[0];
    }),
    db: query(
      "INSERT INTO users(username, user_pass, email,loc) VALUES($1, $2, $3,$4)",
      values
    ),
  };
  // const filter = (user) => user.id === parseInt(id);
  // return db.update("users", newUser, filter);
}
module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
};