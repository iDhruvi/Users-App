const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/dcs")
  .then(() => console.log("mongo db connected"));

app.get("/api/", (req, res) => res.send("No Users in Fullstack!"));

// Get list of all users
app.get("/api/list", async (req, res) => {
  const userList = await userModel.find();
  // const userList = await userModel.find({}, { username: true });

  if (userList.length === 0) {
    return res.json({ data: "no users in fullstack" });
  }

  return res.json({ data: userList });
});

//Search User
app.post("/api/search", async (req, res) => {
  const name = req.body.name;
  //console.log(name);
  const users = await userModel.find({ name: name });

  if (users.length === 0) {
    return res.json({ data: "No Users With This Name" });
  }

  return res.json({ data: users });
});

//Search User GEt
app.get("/api/searchGET/:name", async (req, res) => {
  const name = req.params.name;
  console.log(name);
  const users = await userModel.find({ username: name });

  if (users.length === 0) {
    return res.json({ data: "No Users With This Name" });
  }

  return res.json({ data: users });
});

//User Login
app.post("/api/login", async (req, res) => {
  const uname = req.body.uname;
  const pass = req.body.pass;

  const user = await userModel.findOne({ username: uname, password: pass });
  if (user) {
    return res.json({ data: "Login Successful" });
  } else {
    return res.json({ data: "Invalid Credentials" })
  }
});

// Register user
app.post("/api/registration", (req, res) => {
  const newUser = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully" });
});

app.delete("/api/delete/:id", async (req, res) => {
  const DeletedUser = await userModel.findOneAndDelete({ _id: req.params.id });

  if (DeletedUser.length !== 0)
    return res.json({ data: "Deleted!" });

  return res.json({ data: "No user found :(!" });

});

app.put("/api/update", async (req, res) => {
  const userData = await req.body;
  //console.log(userData);
  const UpdateUser = await userModel.findByIdAndUpdate(
    {_id: userData.id},
    {$set: {
      username: userData.username,
      name: userData.name,
      age: userData.age
      }
    }
  )

  if(UpdateUser.length !== 0){
    return res.json({data: "Record Updated"});
  }

  return res.json({data: "No User Found!!"});
});

app.listen(port, () => console.log(`server running on port 4000`));
