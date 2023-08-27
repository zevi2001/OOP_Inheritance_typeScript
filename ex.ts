class Person {
  firstName: string;
  lastName: string;
  id: number;
  constructor(firstName: string, lastName: string, id: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
  }
}
class Patient extends Person {
  constructor(firstName: string, lastName: string, id: number) {
    super(firstName, lastName, id);
  }
  printPatient() {
    console.log(this.firstName + " , " + this.lastName + " , " + this.id);
  }
}
class Doctor extends Person {
  specialization: string;
  constructor(
    specialization: string,
    doctorID: number,
    firstName: string,
    lastName: string
  ) {
    super(firstName, lastName, doctorID);
    this.specialization = specialization;
  }
  printDoctor() {
    console.log(
      this.firstName +
        " , " +
        this.lastName +
        " , " +
        this.id +
        " " +
        this.specialization
    );
  }
}
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(p: Patient, d: Doctor, date: string, time: string) {
    this.patient = p;
    this.doctor = d;
    this.date = date;
    this.time = time;
  }
  printAppointment() {
    console.log(
      "patient : " +
        this.patient.printPatient() +
        "doctor : " +
        this.doctor.printDoctor() +
        " date : " +
        this.date +
        " time : " +
        this.time
    );
  }
}
class Hospital {
  hospitalName: string;
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  Appointments: Appointment[] = [];
  constructor(hospitalName: string) {
    this.hospitalName = hospitalName;
  }

  addPatient(p: Patient) {
    this.patients.push(p);
  }
  addDoctor(d: Doctor) {
    this.doctors.push(d);
  }
  addAppointment(a: Appointment) {
    this.Appointments.push(a);
  }
  printAppointments() {
    for (let i = 0; i < this.Appointments.length; i++) {
    this.Appointments[i].printAppointment();
    }
  }
  printAppointmentsByDoctorId(id: number) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].doctor.id === id) {
        this.Appointments[i].printAppointment();
      }
    }
  }
  printAppointmentsByPatientId(id: number) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].patient.id === id) {
        this.Appointments[i].printAppointment();
      }
    }
  }
  printAppointmentsByDate(date: string) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].date === date) {
        this.Appointments[i].printAppointment();
      }
    }
  }
}

const hospital = new Hospital(" my hospital ");
const patient1 = new Patient("dudu", "choen", 1);
const doctor1 = new Doctor("hart", 101, "david", "levi");
const appointment1 = new Appointment(patient1, doctor1, "2023-09-01", "10:00");

hospital.addPatient(patient1);
hospital.addDoctor(doctor1);
hospital.addAppointment(appointment1);
console.log("all the Appointment");
hospital.printAppointments();
console.log("Appointment by id 101");
hospital.printAppointmentsByDoctorId(101);
console.log(" Appointment by Patient id 1");
hospital.printAppointmentsByPatientId(1);
console.log(" Appointment to date 2023-09-01 ");
hospital.printAppointmentsByDate("2023-09-01");
