class Person {
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
