const express = require("express");
const users = require("./handlers/users");

const PORT = process.env.PORT || 3000;

const server = express();

server.get("/", (req, res) => {
  res.send("<h1> HELLOOOOOOOOOOO </h1>");
});

server.get("/users/:id", users.get);
server.post("/users", users.post);
server.post("/login", users.login);
server.put("/users/:id", users.put);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
