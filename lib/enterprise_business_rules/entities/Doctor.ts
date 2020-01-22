import Appointment from './Appointment'

export default class Doctor {
  id?: number | null
  firstName: string
  lastName: string
  email!: string
  degree!: string
  appointments?: Array<Appointment>

  constructor(
    id = null,
    firstName: string,
    lastName: string,
    email: string,
    degree: string,
    appointments?: Appointment[]
  ){
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.degree = degree
    this.appointments = appointments
  }
}