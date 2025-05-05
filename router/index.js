const express = require("express");
const router = express.Router();

const poRoute = require("./po/poRoute");
const poitemRoute = require("./po/poitemRoute");

router.use("/po", poRoute);
router.use("/poitem", poitemRoute);

module.exports = router;
