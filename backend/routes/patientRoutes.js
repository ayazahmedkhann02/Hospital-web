const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/add", (req, res) => {

    const { name, age, gender, phone, address, disease } = req.body;

    const sql = `
INSERT INTO patients
(name,age,gender,phone,address,disease)
VALUES(?,?,?,?,?,?)
`;

    db.query(
        sql,
        [name, age, gender, phone, address, disease],
        (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send(err);

            }
            else {

                res.send("Patient Added Successfully");

            }

        });

});

router.get("/all", (req, res) => {

    db.query(
        "SELECT * FROM patients",
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