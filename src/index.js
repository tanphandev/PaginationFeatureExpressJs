const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World 123!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
