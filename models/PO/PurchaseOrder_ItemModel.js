const mongoose = require("mongoose");

const PurchaseOrder_ItemSchema = new mongoose.Schema({
  srno: {
    type: Number,
  },
  item: {
    type: String,
  },
  description: {
    type: String,
  },
  poid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Purchase_Order",
  },
  rate: {
    type: Number,
  },
  dod: {
    type: Date,
  },
  remarks_detail: {
    type: String,
  },
});

module.exports = mongoose.model("purchaseorder_items", PurchaseOrder_ItemSchema);
