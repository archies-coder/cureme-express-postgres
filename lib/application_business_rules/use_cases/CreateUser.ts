import User from './../../enterprise_business_rules/entities/User'
import { hash } from 'bcryptjs'

const CreateUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password:string,
  { userRepository }: any) => {

  const hashedPassword = await hash(password, 12)

  const user = new User(null, firstName, lastName, email, hashedPassword)

  return userRepository.persist(user)

}

export default CreateUser