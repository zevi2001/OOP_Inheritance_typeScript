abstract class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Patient extends Person {
  patientID: number;
  constructor(patientID: number, firstName: string, lastName: string) {
    super(firstName, lastName);
    this.patientID = patientID;
  }
  printPatient() {
    console.log(
      this.firstName + " , " + this.lastName + " , " + this.patientID
    );
  }
}
class Doctor extends Person {
  doctorID: number;
  specialization: string;
  constructor(
    specialization: string,
    doctorID: number,
    firstName: string,
    lastName: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }
  printDoctor() {
    console.log(
      this.firstName +
        " , " +
        this.lastName +
        " , " +
        this.doctorID +
        " " +
        this.specialization
    );
  }
}
class Appointment {
  // moshe = new Patient(51, "moshe", "levi");
  //david = new doctor("legs", 799, "david", "choen");
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
    for (let i = 0; i < Appointment.length; i++) {
      console.log(this.Appointments[i].printAppointment());
    }
  }
  printAppointmentsByDoctorId(id: number) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].doctor.doctorID === id) {
        console.log(this.Appointments[i].printAppointment());
      }
    }
  }
  printAppointmentsByPatientId(id: number) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].patient.patientID === id) {
        console.log(this.Appointments[i].printAppointment());
      }
    }
  }
  printAppointmentsByDate(date:string) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].date ===date) {
        console.log(this.Appointments[i].printAppointment());
      }
    }
  }
}


