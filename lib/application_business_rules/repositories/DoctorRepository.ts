import Doctor from './../../enterprise_business_rules/entities/Doctor'

export default class DoctorRepository{

    repository: any

    constructor(repository: any){
      this.repository = repository
    }

    find(){
      return this.repository.find()
    }

    persist(doctorEntity: Doctor){
      return this.repository.persist(doctorEntity)
    }

    count(){
      return this.repository.count()
    }
}