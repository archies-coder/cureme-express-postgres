import Appointment from '../../enterprise_business_rules/entities/Appointment'
import { getRepository } from 'typeorm'

export default class AppointmentRepositoryPSQL {

  async find() {
    const data = await getRepository(Appointment).find()
    return data
  }

  async persist(appointmentEntity: Appointment){
    const data = await getRepository(Appointment)
      .save(appointmentEntity)
    return data
  }

  async count(){
    const data = await getRepository(Appointment).count()
    return data
  }
}