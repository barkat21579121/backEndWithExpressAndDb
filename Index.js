const express = require("express");

const app = express();
const Port = 8080;

app.get("/", (req, res) => {
  res.send("welcome to my home page");
});

app.listen(Port, () => {
  console.log(`Listening to port no ${Port}`);
});
