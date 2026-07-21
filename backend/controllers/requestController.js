const contract = require("../blockchain/contract");
const Request = require("../models/Request");

exports.createRequest = async (req, res) => {

    try {

        const tx = await contract.addRequest(
            req.user.id,
            req.body.datasetId
        );

        const receipt = await tx.wait();

        const blockchainId = Number(await contract.getTotalRequests()) - 1;

        const request = new Request({

            researcher: req.user.id,

            dataset: req.body.datasetId,

            status: "Pending",

            blockchainId,

            createTxHash: receipt.hash

        });

        await request.save();

        return res.status(201).json({

            success: true,

            message: "Request created successfully",

            request

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.approveRequest = async (req, res) => {

    try {

        const request = await Request.findById(req.params.id);

        if (!request) {

            return res.status(404).json({

                success: false,

                message: "Request not found"

            });

        }

        const tx = await contract.approveRequest(
            request.blockchainId
        );

        const receipt = await tx.wait();

        request.status = "Approved";

        request.approveTxHash = receipt.hash;

        await request.save();

        return res.json({

            success: true,

            message: "Request approved successfully",

            request

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.getRequests = async (req, res) => {

    try {

        const requests = await Request.find()
            .populate("researcher")
            .populate("dataset");

        return res.json({

            success: true,

            count: requests.length,

            requests

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.rejectRequest = async (req, res) => {

    try {

        const request = await Request.findById(req.params.id);

        if (!request) {

            return res.status(404).json({

                success: false,

                message: "Request not found"

            });

        }

        request.status = "Rejected";

        await request.save();

        return res.json({

            success: true,

            message: "Request rejected",

            request

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.getMyRequests = async (req, res) => {

    try {

        const requests = await Request.find({

            researcher: req.user.id

        })

        .populate("dataset");

        return res.json({

            success: true,

            requests

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

};