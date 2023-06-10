const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require("stripe");

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

//Step-1 schema for the user
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

// Step-2 Create User Model
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
  // console.log(req.body);
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

//Product API Section:
// make one API for save all this data to the database on mongodb:
// Step-1 Create schema for product to save data in db
const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

//Step-2 Create Model for Product to save data in db
//create product collection in database
const productModel = mongoose.model("product", schemaProduct);

//Step-3 Save Product in Data API
app.post("/uploadproduct", async (req, res) => {
  // console.log(req.body);
  //step-4:
  //now we want to save data to the our database:
  const data = await productModel(req.body);
  const datasave = await data.save();
  //one more thing in backend side nothing data is coming for that we will send data
  res.send({ message: "Upload Successfully" });
});

// make our own API for fetching all this data
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

//API for the Payment System (Payment Get way):
console.log(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
app.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);

  try {
    // this parameter for that all this my price all,  these item list price list according to the stripe payment gateway  which by default make for that here i will just give the params and this will be the object and i will pass these params
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1NHMq4GM0XBpsXVFnJrhcC1u" }],
      // this will be the our card items in side line_items this will be the accept of array
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              // images : [item.image]
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),

      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };
    // first of all integrated all the parameter which are inside this i will implement
    //and this is your stripe method for checkout section by default stripe will be provided

    const session = await stripe.checkout.sessions.create(params);
    // console.log(session);
    // now here after that this i want to give the res i will send to the request
    res.status(200).json(session.id);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

app.listen(PORT, () => console.log("server is running at port :" + PORT));
