/* eslint-disable no-unused-vars */
import Appointment from '../../enterprise_business_rules/entities/Appointment'

export default class AppointmentRepository{

    repository: any

    constructor(repository: any){
      this.repository = repository
    }

    find(){
      return this.repository.find()
    }

    persist(appointmentEntity: Appointment){
      return this.repository.persist(appointmentEntity)
    }

    count(){
      return this.repository.count()
    }
}