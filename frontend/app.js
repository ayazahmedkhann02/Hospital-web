async function addPatient() {

    const patient = {

        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        disease: document.getElementById("disease").value

    };

    try {

        const response = await fetch(
            "http://localhost:5000/patients/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patient)
            }
        );

        const data = await response.text();

        alert(data);

    }

    catch (error) {

        console.log(error);

        alert("Patient Add Failed");

    }

}


async function addDoctor() {

    const doctor = {

        name: document.getElementById("name").value,
        specialization: document.getElementById("specialization").value,
        phone: document.getElementById("phone").value,
        experience: document.getElementById("experience").value

    };

    try {

        const response = await fetch(
            "http://localhost:5000/doctors/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(doctor)
            }
        );

        const data = await response.text();

        alert(data);

    }

    catch (error) {

        console.log(error);

        alert("Doctor Add Failed");

    }

}


async function bookAppointment() {

    const appointment = {

        patient_id: document.getElementById("patient_id").value,
        doctor_id: document.getElementById("doctor_id").value,
        appointment_date: document.getElementById("appointment_date").value,
        status: document.getElementById("status").value

    };

    try {

        const response = await fetch(
            "http://localhost:5000/appointments/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointment)
            }
        );

        const data = await response.text();

        alert(data);

    }

    catch (error) {

        console.log(error);

        alert("Appointment Booking Failed");

    }

}



function login() {

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;


    if (
        username === "admin"
        &&
        password === "admin123"
    ) {

        window.location.href =
            "dashboard.html";

    }
    else {

        alert(
            "Invalid User and Password"
        );

    }

}