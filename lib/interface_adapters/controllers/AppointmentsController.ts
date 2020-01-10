import AppointmentRepositoryPSQL from './../storage/AppointmentRepositoyPSQL'
import ListAppointments from './../../application_business_rules/use_cases/ListAppointments'
import AppointmentRepository from '../../application_business_rules/repositories/AppointmentRepository'


const appointmentRepository = new AppointmentRepository(new AppointmentRepositoryPSQL())

const list = async () => {
  return ListAppointments({appointmentRepository} as any)
}

export {list}