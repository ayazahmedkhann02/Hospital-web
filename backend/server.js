const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/patients", patientRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

app.get("/", (req, res) => {

    res.send("Hospital Server Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});