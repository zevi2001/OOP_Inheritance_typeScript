class Person {
  firstName: string;
  lastName: string;
  private _id: number;
  age: number;
  address: string;
  constructor(
    firstName: string,
    lastName: string,
    id: number,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._id = id;
    this.age = age;
    this.address = address;
  }
  getId() {
    return this._id;
  }
  setId(id: number) {
    this._id = id;
  }
}
class Patient extends Person {
  phoneNumber: number;
  emergencyContact: number;
  private _medicalHistory: Appointment[] = [];
  constructor(
    firstName: string,
    lastName: string,
    id: number,
    age: number,
    address: string,
    phoneNumber: number,
    emergencyContact: number,
    medicalHistory: Appointment[] = []
  ) {
    super(firstName, lastName, id, age, address);
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this._medicalHistory = medicalHistory;
  }
  get_medicalHistory() {
    return this._medicalHistory;
  }
  set_medicalHistory(medicalHistory: Appointment) {
    this._medicalHistory.push(medicalHistory);
  }
  printPatient() {
    console.log(this.firstName + " , " + this.lastName + " , " + this.getId());
  }
}
class MedicalStaff extends Person {
  staffID: number;
  position: string;
  department: string;  
  constructor(
    firstName: string,
    lastName: string,
    id: number,
    age: number,
    address: string,
    staffID: number,
    position: string,
    department: string
  ) {
    super(firstName, lastName, id, age, address);
    this.staffID = staffID;
    this.position = position;
    this.department = department;
  }
}
class Doctor extends MedicalStaff {
  array:string[]=["12:00-12:30","12:30-13:00"];
  specialization: string;
  constructor(
    specialization: string,
    firstName: string,
    lastName: string,
    id: number,
    age: number,
    address: string,
    staffID: number,
    position: string,
    department: string,
    array:string[]
  ) {
    super(firstName, lastName, id, age, address, staffID, position, department);
    this.specialization = specialization;
    this.array=array
  }
  printDoctor() {
    console.log(
      this.firstName +
        " , " +
        this.lastName +
        " , " +
        this.getId() +
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
class MedicalRecord{
  diagnosis: string;
  prescription: string;
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  constructor(diagnosis: string, prescription: string) {
   this.diagnosis=diagnosis
    this.prescription=prescription;
  }
  
}
class Hospital {
  hospitalName: string;
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  record: MedicalRecord[] = [];
  Appointments: Appointment[] = [];
  constructor(hospitalName: string) {
    this.hospitalName = hospitalName;
  }


 
  getDoctorSchedule(date:string){
    for (let i = 0; i < this.Appointments.length; i++) {
     if(this.Appointments[i].date===date){
       console.log(this.Appointments[i].doctor.array)
     }
    }
  }
  getMedicalRecords(patient:patient){
   for (let i = 0; i < this.record.length; i++) {
    if(this.record[i].patients===patient){
      console.log(this.record[i].patients)
    }
   }

  }
  createMedicalRecord(diagnosis: string,prescription: string):MedicalRecord{
    const newMedical=new MedicalRecord(diagnosis,prescription)
    return newMedical;
  }
  findDoctorBySpecialization(specialization:string){
    for (let i= 0; i < this.doctors.length; i++) {
      if(this.doctors[i].specialization===specialization){
        console.log(this.doctors[i])
      }
    }
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
      if (this.Appointments[i].doctor.getId() === id) {
        this.Appointments[i].printAppointment();
      }
    }
  }
  printAppointmentsByPatientId(id: number) {
    for (let i = 0; i < this.Appointments.length; i++) {
      if (this.Appointments[i].patient.getId() === id) {
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


// const hospital = new Hospital(" my hospital ");
// const patient1 = new Patient("dudu", "choen", 1);
// const doctor1 = new Doctor("hart", 101, "david", "levi");
// const appointment1 = new Appointment(patient1, doctor1, "2023-09-01", "10:00");

// hospital.addPatient(patient1);
// hospital.addDoctor(doctor1);
// hospital.addAppointment(appointment1);
// console.log("all the Appointment");
// hospital.printAppointments();
// console.log("Appointment by id 101");
// hospital.printAppointmentsByDoctorId(101);
// console.log(" Appointment by Patient id 1");
// hospital.printAppointmentsByPatientId(1);
// console.log(" Appointment to date 2023-09-01 ");
// hospital.printAppointmentsByDate("2023-09-01");
