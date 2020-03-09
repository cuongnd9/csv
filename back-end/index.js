const express = require("express");

const app = express();

app.get("/", (req, res) => res.json("Chao Xin"));

app.listen(7777, () =>
  console.log("App is listening on http://127.0.0.1:7777")
);
