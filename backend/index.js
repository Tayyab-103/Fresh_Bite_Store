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
//Signup API
//async before else statement
app.post("/signup", async (req, res) => {
  // i want to data inside the user (const userModel = mongoose.model("user", userSchema);)
  console.log(req.body);
  // first of all i want to check this email id available in DB or not
  const { email } = req.body;
  //checked
  userModel.findOne({ email: email }, (err, result) => {
    console.log(result);
    console.log(err);
    if (result) {
      res.send({ message: "Email id is already register", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
  });
});

//Login API:
app.post("/login", (req, res) => {
  console.log(req.body);
  // first of all i want to check this email id available in DB or not

  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      //   console.log(result);
      //we don't want to send the password to the user again so menually worked are as following:
      //copy all section id to image and password filed removed and then paste in it.
      const dataSend = {
        _id: result._id, //new ObjectId("646c54ca5a4c8b6505b6c15b") bydefault id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
    //   console.log(dataSend);
      res.send({
        message: "Login is Successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
});

app.listen(PORT, () => console.log("server is running at port :" + PORT));
