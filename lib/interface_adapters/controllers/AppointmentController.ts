/* eslint-disable no-unused-vars */
import AppointmentRepositoryPSQL from '../storage/AppointmentRepositoyPSQL'
import ListAppointments from '../../application_business_rules/use_cases/ListAppointments'
import AppointmentRepository from '../../application_business_rules/repositories/AppointmentRepository'
import * as express from 'express'
import CreateAppointment from '../../application_business_rules/use_cases/CreateAppointment'

const appointmentRepository = new AppointmentRepository(new AppointmentRepositoryPSQL())

const list = async () => {
  return ListAppointments({appointmentRepository} as any)
}

const create = async (req: express.Request, res: express.Response) => {
  if(!req.body){
    return res.status(400).send('No Body')
  }

  const { patientID, doctorID, date, time } = req.body

  const appointment = await CreateAppointment(patientID, doctorID, date, time, { appointmentRepository })
}

export { list, create }