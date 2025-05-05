const express = require("express");
const router = express.Router();

const {getpo, insert, podelete, putpo} = require("../../controller/po/poController");



router.get("/poget/id/:id",  getpo);

router.post("/poin",  insert);

router.delete("/podel/id/:id",  podelete);

router.put("/poput/id/:id",  putpo);

module.exports = router;