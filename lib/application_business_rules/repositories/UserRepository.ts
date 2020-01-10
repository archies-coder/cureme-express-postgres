// eslint-disable-next-line no-unused-vars
import User from '../../enterprise_business_rules/entities/User'

export default class UserRepository{
    repository: any

    constructor(repository: any){
      this.repository = repository
    }

    find(){
      return this.repository.find()
    }

    findOne(email: string){
      return this.repository.findOne(email)
    }

    persist(userEntity: User){
      return this.repository.persist(userEntity)
    }

    count(){
      return this.repository.count()
    }
}