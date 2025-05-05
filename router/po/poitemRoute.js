const express = require("express");
const router = express.Router();

const {del, getpoitem, insertitem, putitem} = require("../../controller/po/poitemController");



router.delete("/poitemdel",  del);

router.get("/poitemget/idd/:idd",  getpoitem);

router.post("/inPoItem",  insertitem);

router.put("/poitemput/poid/:poid",  putitem);

module.exports = router;
