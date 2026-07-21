const authRoutes=require("./routes/authRoutes");
const connectDB = require("./config/database");
const testRoute=require("./routes/testRoute");
const datasetRoutes = require("./routes/datasetRoutes");
const requestRoutes = require("./routes/requestRoutes");



const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/test",testRoute);
app.use("/api/datasets", datasetRoutes);
app.use("/api/requests", requestRoutes);


app.get("/", (req, res) => {
    res.send("Biomedical Blockchain API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});