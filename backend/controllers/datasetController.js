const Dataset = require("../models/Dataset");

exports.getDatasets = async (req, res) => {

    try {

        const datasets = await Dataset.find();

        res.json(datasets);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.createDataset = async (req, res) => {

    try {

        const dataset = new Dataset({

            title: req.body.title,

            description: req.body.description,

            hospital: req.body.hospital,

            downloadLink: req.body.downloadLink

        });

        await dataset.save();

        res.status(201).json(dataset);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};