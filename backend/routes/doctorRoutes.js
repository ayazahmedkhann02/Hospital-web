const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/add", (req, res) => {

    const { name, specialization, phone, experience } = req.body;

    const sql = `
INSERT INTO doctors
(name,specialization,phone,experience)
VALUES(?,?,?,?)
`;

    db.query(
        sql,
        [name, specialization, phone, experience],
        (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send(err);

            }
            else {

                res.send("Doctor Added Successfully");

            }

        });

});

router.get("/all", (req, res) => {

    db.query(
        "SELECT * FROM doctors",
        (err, result) => {

            if (err) {

                res.status(500).send(err);

            }
            else {

                res.json(result);

            }

        });

});

module.exports = router;