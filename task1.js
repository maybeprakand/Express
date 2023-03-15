const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
let categories = ["name", "id", "age"];
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.post("/add-category", (req, res) => {
  if (req.body.name) {
    categories = [...categories, req.body.name];
    res.send("the category is added to list.");
  } else {
    res.send("please provide a category");
  }
});
app.get("/delete-category", (req, res) => {
  if (req.query.name) {
    categories = categories.filter((category) => {
      return category !== req.query.name;
    });
    res.send("category deleted");
  }
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
