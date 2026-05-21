const express = require("express");

const router = express.Router();

router.post("/send", (req, res) => {

    const {

        email,
        message

    } = req.body;

    console.log("Email:", email);

    console.log("Message:", message);

    res.send(
        "Notification Sent Successfully"
    );

});


router.get("/all", (req, res) => {

    const notifications = [

        {
            id: 1,
            email: "patient@gmail.com",
            message: "Appointment Confirmed"
        },

        {
            id: 2,
            email: "doctor@gmail.com",
            message: "New Appointment Assigned"
        }

    ];

    res.json(notifications);

});

module.exports = router;