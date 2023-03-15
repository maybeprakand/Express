const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let users = ["ram", "shyam"];
///add-user?name=sujan
app.post("/add-user", (req, res) => {
  if (req.body.name) {
    users = [...users, req.body.name]; //spreader
    res.send("user added  ");
  } else {
    console.log("please provide a name ");
  }
});
app.get("/delete-user", (req, res) => {
  if (req.query.name) {
    users = users.filter((user) => {
      return user != req.query.name;
    });
    res.send("Deleted the user");
  }
});
app.get("/user", (req, res) => {
  res.send(users);
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
