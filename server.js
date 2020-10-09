const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "html");

app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("speech.html");
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
