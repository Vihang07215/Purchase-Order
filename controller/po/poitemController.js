const PurchaseOrder_Item = require("../../models/PO/PurchaseOrder_ItemModel");

exports.del = async (req, res, next) => {
  const { description, dod, item, poid, rate, remarks_detail, srno } = req.body;
  const deletedPurchaseOrder_Item = await PurchaseOrder_Item.findByIdAndDelete(
    poid
  );
  //		deletedPurchaseOrder_Item
  res.json(deletedPurchaseOrder_Item);
};

exports.getpoitem = async (req, res, next) => {
  const { idd } = req.params;
  const var_PurchaseOrder_Item_List = await PurchaseOrder_Item.find(
    {
      poid: idd,
    },
    "poid item description srno rate remarks_detail dod "
  );        
  //		get
  res.json(var_PurchaseOrder_Item_List);
};

exports.insertitem = async (req, res, next) => {
  const { description, dod, item, poid, rate, remarks_detail, srno } = req.body;
  let srnoo = 1;
  const var_poitem_srno = await PurchaseOrder_Item.findOne({}, "srno ").sort({
    srno: -1,
  });
  if (var_poitem_srno !== "undefined") {
    //		 srnoo = var_poitem_srno.srno + 1;
    srnoo = var_poitem_srno.srno + 1;
  } else {
  }
  const createdPurchaseOrder_Item = new PurchaseOrder_Item({
    srno: srnoo,  
    description,
    rate,
    dod,
    poid,
    item,
    remarks_detail,
  });
  await createdPurchaseOrder_Item.save();
  //		res.save
  res.save(createdPurchaseOrder_Item);
};

exports.putitem = async(req, res, next) => {
const {description, dod, item, rate, remarks_detail, srno} = req.body;
const {poid} = req.params;
let updatedPurchaseOrder_Item;
updatedPurchaseOrder_Item = await PurchaseOrder_Item.findByIdAndUpdate(poid,
{
dod: dod,
description: description,
rate: rate,
item: item,
srno: srno,
remarks_detail: remarks_detail
}
, {new: true} );
//		updatedPurchaseOrder_Item
res.json(updatedPurchaseOrder_Item);

}
