require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");

const { HoldingsModel} = require('./model/HoldingsModel');
const { PositionsModel} = require('./model/PositionsModel');
const { OrdersModel} = require('./model/OrdersModel');
const { SellsModel} = require('./model/SellsModel');

const authRoutes = require("./routes/authRoutes");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;


const app = express();


app.use(cors({
  origin:"*"
}));
app.use(express.json());

app.use(bodyParser.json());

// Routes AFTER middleware
app.use("/auth", authRoutes);


// app.get('/addHoldings', async(req, res)=>{
//     let tempHoldings= 
//      [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item)=>{
//   let newHolding = new HoldingsModel({
//      name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.day,
//     day: item.day,
//   });
//   newHolding.save();
// })
//   res.send("Done!")
// });


// app.get('/addPositions', async(req, res)=>{
//     let tempPositions = 
//      [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//  tempPositions.forEach((item)=>{

//     let newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//  });
//   newPosition.save();
//  });
 
//  res.send("Done!");
 

// });

app.get('/allHoldings', async(req, res)=>{
  try{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  }
  catch{
    res.status(500).json({message: "Error fetching holdings"})
  }
  
});

app.get('/allPositions', async(req, res)=>{
  try{
     let allPositions = await PositionsModel.find({});
     res.json(allPositions);
  }
  catch{
    res.status(500).json({message:"Error fetching positions"})
  }
 
});

app.post('/newOrder', async(req, res)=>{

  try{
    let newOrder = new OrdersModel({
    name: req.body.name,
    qty:  req.body.qty,
    price: req.body.price,
    mode:  req.body.mode,

  });
    
  await newOrder.save();
  res.status(200).json({ message: "Order saved successfully" });

  }
  catch{
    res.status(500).json({ message: "Error saving order" });
  }
  

});
//Saare Orders fetch karne ke liye (Sell window mein dikhane ke liye)
app.get('/allOrders', async(req, res)=>{
  try{
    let allOrders = await OrdersModel.find({});
    res.status(200).json(allOrders);
  }
  catch(err){
    res.status(500).send("Error fetching orders")
  }
});

//Saare Sells fetch karne ke liye
app.get('/allSells', async(req, res)=>{
  try{
    let allSells = await SellsModel.find({});
    res.status(200).json(allSells);
  }
  catch(err){
    res.status(500).send("Error fetching sells")
  }
});

//Sell Order Logic (Database se order delete ya status update karne ke liye)
app.post('/sellOrder', async (req, res) => {
  try {
    const { orderId, qty, price } = req.body; // Frontend se aane wali ID aur details

    // 1. Check karein ki ID aayi bhi hai ya nahi
    if (!orderId) {
      return res.status(400).send("Order ID provide nahi ki gayi hai.");
    }

    // 2. Database se order fetch karein
    const order = await OrdersModel.findOne({ name: orderId });

    if (!order) {
      return res.status(404).send("Database mein ye Order ID nahi mili.");
    }

    // 3. Naya Sell entry create karein
    let newSell = new SellsModel({
      name: order.name,
      qty: qty || order.qty,
      price: price || order.price,
      mode: order.mode,
    });
    
    await newSell.save();

    // 4. Original order ko delete karein
    await OrdersModel.findOneAndDelete({ name: orderId });

    res.status(200).send("Order successfully sell ho gya!");
  } catch (err) {
    console.error("Backend Error:", err);
    res.status(500).send("Error processing sell order");
  }
});

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("✅ MongoDB Connected")

  app.listen(PORT, ()=>{
     console.log("🚀 Server running on port ${PORT}`");
  });
})
.catch((err)=>{
  console.error("❌ MongoDB connection failed:", err);
})