const express = require("express");

const router = express.Router();

const db = require("../db");

router.post("/add", (req, res) => {

    const {
        patient_id,
        doctor_id,
        appointment_date,
        status
    } = req.body;

    const sql = `
INSERT INTO appointments
(patient_id,doctor_id,appointment_date,status)
VALUES(?,?,?,?)
`;

    db.query(
        sql,
        [
            patient_id,
            doctor_id,
            appointment_date,
            status
        ],
        (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send(err);

            }
            else {

                res.send("Appointment Booked");

            }

        });

});

router.get("/all", (req, res) => {

    const sql = `
SELECT
a.appointment_id,
p.name as patient_name,
d.name as doctor_name,
a.appointment_date,
a.status
FROM appointments a
JOIN patients p
ON a.patient_id=p.patient_id
JOIN doctors d
ON a.doctor_id=d.doctor_id
`;

    db.query(sql, (err, result) => {

        if (err) {

            res.status(500).send(err);

        }
        else {

            res.json(result);

        }

    });

});

module.exports = router;