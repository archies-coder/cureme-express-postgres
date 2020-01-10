/* eslint-disable no-unused-vars */
import { Timestamp } from 'typeorm'

/*
id
patient id
doctor id
*/

export default class Appointment {
    id?: number | null
    patientID!: number
    doctorID!: number
    date!: Date
    time?: Timestamp

    constructor(id = null, patID: number, docID: number, date: Date, timeStamp: Timestamp) {
      this.id = id
      this.patientID = patID
      this.doctorID = docID
      this.date = date
      this.time = timeStamp
    }
}