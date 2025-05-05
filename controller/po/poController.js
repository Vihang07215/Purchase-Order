const Purchase_Order = require('../../models/PO/Purchase_OrderModel');


exports.getpo = async(req, res, next) => {
const {id} = req.params;
const var_Purchase_Order_List = await Purchase_Order.findById(id,'pono date party remarks ');
//		var_Purchase_Order_List
res.json(var_Purchase_Order_List);




}

exports.insert = async(req, res, next) => {
const {date, party, pono, remarks} = req.body;
const createdPurchase_Order = await Purchase_Order.create({
pono, 
party, 
date, 
remarks, 
});
//		insert
res.json(createdPurchase_Order);




}

exports.podelete = async(req, res, next) => {
const {id} = req.params;
const deletedPurchase_Order = await Purchase_Order.findByIdAndDelete(id);
console.log("deleted succesfully!!!!!!!!");



}

exports.putpo = async(req, res, next) => {
const {date, party, pono, remarks} = req.body;
const {id} = req.params;
const updatedPurchase_Order = await Purchase_Order.findByIdAndUpdate(id,
{
pono: pono,
party: party,
remarks: remarks,
date: date
}
, {new: true} );
//		updatedPurchase_Order
res.json(updatedPurchase_Order);




}




