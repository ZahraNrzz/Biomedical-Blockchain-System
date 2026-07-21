const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const admin = require("../middleware/adminMiddleware");

const request = require("../controllers/requestController");

router.post("/", auth, request.createRequest);

router.get("/", auth, request.getRequests);

router.put(
    "/approve/:id",
    auth,
    admin,
    request.approveRequest
);

router.get(
    "/my",
    auth,
    request.getMyRequests
);

router.put(
    "/reject/:id",
    auth,
    admin,
    request.rejectRequest
);

module.exports = router;