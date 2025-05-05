const mongoose = require("mongoose");

const Purchase_OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  pono: {
    type: String,
  },
  party: {
    type: String,
  },
  remarks: {
    type: String,
  },
});

module.exports = mongoose.model("Purchase_Order", Purchase_OrderSchema);
