import Appointment from './../../enterprise_business_rules/entities/Appointment'
import { Timestamp } from 'typeorm'

const CreateAppointment = (
  patientID: number,
  doctorID: number,
  date: Date,
  time: Timestamp,
  {appointmentRepository}: any
) => {
  const appointment = new Appointment(null, patientID, doctorID, date, time)

  return appointmentRepository.persist(appointment)
}

export default CreateAppointment