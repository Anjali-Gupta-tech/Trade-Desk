require('dotenv').config();
const express=require('express')
const app=express()
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const allHoldings=require('./models/holdings');
const allPositions=require('./models/position');
const OrderModels=require('./models/orders.js');
const Users=require('./models/user');
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//holidings api
app.get('/holdings',async(req,res)=>{
 const holdingsdata= await allHoldings.find({})
res.send(holdingsdata);
})
//positions api
app.get('/positions',async(req,res)=>{
  const positionsdata=await allPositions.find({})
  res.send(positionsdata)
})
//new orders api
app.post("/neworders", async (req, res) => {
    console.log("👉 BODY:", req.body);
  try {
    const newOrder = new OrderModels({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mood: req.body.mood,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });

  } catch (error) {
    res.status(500).json({
      message: "Order failed",
      error: error.message,
    });
  }
});
//get all orders api
app.get('/orders',async(req,res)=>{
  const allorders= await OrderModels.find({})
  res.send(allorders)
})

// REGISTER
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // basic validation
    if (!username || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    // check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new Users({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Registration failed");
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password required");
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).send("Invalid email or password");
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).send("Invalid email or password");
    }

    // generate jwt
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Login failed");
  }
});



 

const uri=process.env.MONGO_URL
mongoose.connect(uri)
  .then(() => {
    console.log("Database connected")
    })
 .catch(err => console.log(err));
app.listen(8080, () => {
      console.log(`Server running on port 8080`)})
      
/*app.get("/addholdings",async(req,res)=>{
 
   const tempholdings=[
 {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.3,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  },
];
tempholdings.forEach(async(item)=>{
    const newHoldings =new allHoldings({
       name:item.name,
       qty:item.qty,
       avg:item.avg,
       price:item.price,
       net:parseFloat(item.net),
       day:parseFloat(item.day)

     })
   await newHoldings.save();
})
  res.send("data inserted,done!")
})
app.get('/addpositions',(req,res)=>{
  const tempposition=[
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
  ]
  tempposition.forEach(async(item)=>{
    const newpositions=new allPositions({
     product:item.product,
    name:item.name,
    qty:item.qty,
    avg:item.avg,
    price:item.price,
    net:parseFloat(item.net),
    day:parseFloat(item.day),
    isLoss:item.isLoss,
    })
   await newpositions.save()
  })
  res.send('saved in db')
})*/