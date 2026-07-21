const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const dataset = require("../controllers/datasetController");

const admin = require("../middleware/adminMiddleware");

router.get("/", auth, dataset.getDatasets);

router.post("/", auth, admin, dataset.createDataset);

module.exports = router;