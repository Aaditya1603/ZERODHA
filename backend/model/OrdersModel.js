const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  // Add a user reference link to connect this transaction to a real account
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = { OrdersModel: mongoose.model("orders", OrdersSchema) };
