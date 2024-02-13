const express = require("express");
const path = require("path");

const app = express();
const Port = 8080;
const pathName = path.join(__dirname, "../public");

app.use(express.static(pathName));

app.get("/", (req, res) => {
  res.send("welcome to my home page");
});

app.listen(Port, () => {
  console.log(`Listening to port no ${Port}`);
});
