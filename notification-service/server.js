const express = require("express");
const cors = require("cors");
require("dotenv").config();

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/notifications", notificationRoutes);

app.listen(process.env.PORT, () => {

    console.log(
        `Notification Service Running on Port ${process.env.PORT}`
    );

});