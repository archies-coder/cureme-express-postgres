/*
id
patient name
doctor name
date & time
issue
email
*/

export default class Appointment {
    id?: number | null
    firstName!: string
    lastName!: string
    email: string
    doctorID!: number

    constructor(id = null, fName: string, lName: string, email: string, docID: number) {
      this.id = id
      this.firstName = fName
      this.lastName = lName
      this.email = email
      this.doctorID = docID
    }
}