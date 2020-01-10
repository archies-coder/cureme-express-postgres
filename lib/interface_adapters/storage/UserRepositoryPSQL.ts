import { getRepository } from 'typeorm'
import User from '../../enterprise_business_rules/entities/User'

export default class UserRepositoryPSQL {

  async find() {
    const data = await getRepository(User).find()
    return data
  }

  async findOne(email: string) {
    const user = await getRepository(User)
      .findOne({where: {email: email}})
    return user
  }

  async persist(userEntity: User){
    const data = await getRepository(User)
      .save(userEntity)
    return data
  }

  async count(){
    const data = await getRepository(User).count()
    return data
  }
}