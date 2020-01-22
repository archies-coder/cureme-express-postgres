import Doctor from '../../enterprise_business_rules/entities/Doctor'
import { getRepository, getConnection } from 'typeorm'

export default class DoctorRepositoryPSQL {

  // async _InitializeRepositoryWithTwoDoctors() {
  //   const one = new Doctor(null, 'Archie', 'Bhoir', 'archis@rocks.always', 'MBBS')
  //   const two = new Doctor(null, 'Hardik', 'Arekar', 'hardik@cureme.com', 'MBBS')

  //   this.persist(one)
  //     .then((doc)=> {
  //       this.persist(two)
  //         .then(()=> this.count())
  //     })
  //     .catch(err=> console.log(err))
  // }

  // constructor(){
  //   this._InitializeRepositoryWithTwoDoctors()
  // }

  async find() {
    const data = await getRepository(Doctor).find()
    return data
  }

  async persist(doctorEntity: Doctor){
    const data = await getRepository(Doctor)
      .save(doctorEntity)
    return data
  }

  async count(){
    const data = await getRepository(Doctor).count()
    return data
  }
}