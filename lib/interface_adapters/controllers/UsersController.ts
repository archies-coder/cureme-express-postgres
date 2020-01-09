import CreateUser from './../../application_business_rules/use_cases/CreateUser'
import UserRepository from './../storage/UserRepository'
import UserSerializer from './../serializers/UserSerializer'
import { compare } from 'bcryptjs'

const userRepository = new UserRepository()

const create = async (req: any, res: any) => {

  //Input
  const {firstName, lastName, email, password} = req.body

  //User Already Registered
  const ExistingUser = await userRepository.findOne(email)
  if (ExistingUser) {
    return res.status(406).send('Wrong Body')
  }

  // TODO  (validations)

  //Treatment
  const user = await CreateUser(firstName, lastName, email, password, { userRepository })

  // Output
  if(user){

    const count = await userRepository.count()

    console.log('data is here    ::::')
    console.log(count)

    const userSerializer = new UserSerializer()
    return res.status(201).send(userSerializer.serialize(user))

  } else {
    console.log('nope, something went wrong    :::::')
  }
}

const login = async (req: any, res: any) => {

  //Input
  const {email, password} = req.body

  //No such Email
  const user = await userRepository.findOne(email)

  if(!user){
    console.log('no such user')
    return res.status(404).send('No such User Email')
  }

  //Treatment
  const valid = await compare(password, user.password)

  // Wrong Password
  if (!valid) {
    return res.status(401).send('Wrong Credentials')
  }

  //Session
  req.session.userId = user.id
  req.session.user = user
  const sid= req.sessionID

  //Output
  res.status(200).send({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    id: user.id,
    sessionId: sid
  })
  return user
}

export {create, login}