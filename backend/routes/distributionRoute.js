const express = require("express");
const { createDistribution, getAllDistribution } = require("../controllers/distributionController");
const router = express.Router();

router.route("/distribution/createDistribution").post(createDistribution);

router.route("/distribution").get(getAllDistribution);

module.exports = router;
