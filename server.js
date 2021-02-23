const express = require("express");
const PORT = process.env.PORT || 3000;

const server = express();

server.get("/", (reg, res) => {
  res.send("<h1> HELLOOOOOOOOOOO </h1>");
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
