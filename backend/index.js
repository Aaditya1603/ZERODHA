require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const { Signup, Login } = require("./controllers/AuthController");
const { userVerification } = require("./middlewares/AuthMiddleware");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "https://zerodha-frontend-kch6.onrender.com",
      "https://zerodha-frontend-kch5.onrender.com",
      "https://zerodha-dashboard-wj7w.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }),
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPositions = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPositions.save();
//   });
//   res.send("Done Positions!");
// });

app.get("/", (req, res) => {
  res.status(200).send("Zerodha Backend Server is Running!");
});

app.post("/signup", Signup);
app.post("/login", Login);

//Auth-Protected Route
app.post("/verify", userVerification, (req, res) => {
  res.json({
    status: true,
    user: {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username,
    },
  });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// app.post("/newOrder", async (req, res) => {
//     let newOrder = new OrdersModel({
//        name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//     });

//   newOrder.save();
//   res.send("Order Saved!")
// })

// Orders API
app.get("/getOrders", async (req, res) => {
  const result = await OrdersModel.find({});
  res.json(result);
});

// Create New Order (BUY / SELL)
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || isNaN(qty) || isNaN(price) || !mode) {
      return res.status(400).send("Invalid input data");
    }

    const order = new OrdersModel({ name, qty, price, mode });
    await order.save();

    let holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qty;
        const totalCost = holding.avg * holding.qty + price * qty;
        holding.avg = totalCost / totalQty;
        holding.qty = totalQty;
      } else {
        holding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "+0.00%",
          day: "+0.00%",
        });
      }
      await holding.save();
    } else if (mode === "SELL") {
      if (!holding || holding.qty < qty) {
        return res.status(400).send("Not enough stock to sell.");
      }

      holding.qty -= qty;
      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.send("Order placed and holdings updated");
  } catch (err) {
    console.error("Error in /newOrder:", err.message);
    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, async () => {
  console.log(`App Started on port ${PORT}!`);
  try {
    await mongoose.connect(url);
    console.log("DB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }
});
