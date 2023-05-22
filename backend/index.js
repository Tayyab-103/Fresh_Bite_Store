const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
//cors url is comming error thats way use this
// Cross-Origin Resource Sharing (CORS), which is a mechanism used by web browsers to allow or restrict web page requests to a different domain.
app.use(cors());
// when some data coming form the api then convert data in the form of json
//storage limit limit : "10mb"
app.use(express.json({ limit: "10mb" }));

//custom PORT Build
// where you are deploy the code then some error ouccors that's why it is used this custom PORT ==> env folder is already present this port 8080.
const PORT = process.env.PORT || 8080;
//MONGODB CONNENCTION:
console.log(process.env.MONGODB_URL);
//"strictQuery" is being used or the specific problem you're trying to address, I can try to provide a more accurate response or solution.
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//Create User Model
const userModel = mongoose.model("user", userSchema);

//API
app.get("/", (req, res) => {
  res.send("server is running");
});
//another API
app.post("/signup", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log("server is running at port :" + PORT));
