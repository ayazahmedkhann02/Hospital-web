CREATE TABLE patients(
patient_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
age INT,
gender VARCHAR(20),
phone VARCHAR(15),
address VARCHAR(200),
disease VARCHAR(100)
);

CREATE TABLE doctors(
doctor_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
specialization VARCHAR(100),
phone VARCHAR(15),
experience INT
);

CREATE TABLE appointments(
appointment_id INT PRIMARY KEY AUTO_INCREMENT,
patient_id INT,
doctor_id INT,
appointment_date DATE,
status VARCHAR(30),

FOREIGN KEY(patient_id)
REFERENCES patients(patient_id),

FOREIGN KEY(doctor_id)
REFERENCES doctors(doctor_id)
);