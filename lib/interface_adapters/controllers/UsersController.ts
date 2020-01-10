/* eslint-disable no-unused-vars */
import * as express from 'express'
import CreateUser from './../../application_business_rules/use_cases/CreateUser'
import UserRepositoryPSQL from '../storage/UserRepositoryPSQL'
import UserSerializer from './../serializers/UserSerializer'
import { compare } from 'bcryptjs'
import validator from 'validator'
import UserRepository from '../../application_business_rules/repositories/UserRepository'

const userRepository = new UserRepository(new UserRepositoryPSQL())

const create = async (req: express.Request, res: express.Response) => {

  if(!req.body){
    return res.status(400).send('No Body')
  }
  //Input
  const { firstName, lastName, email, password } = req.body

  if (
    validator.isEmpty(password) ||
    !validator.isLength(password, { min: 5 })
  ){
    return res.status(400).send('Invalid Password')
  }

  if(!validator.isEmail(email)) return res.status(400).send('Invalid Email')


  //Sanitizing Input
  const sanitizedEmail = validator.normalizeEmail(email)

  if(sanitizedEmail === false) {
    return res.status(400).send('Invalid Email')
  }

  //User Already Registered
  const ExistingUser = await userRepository.findOne(sanitizedEmail as string)
  if (ExistingUser) {
    return res.status(406).send('Already there')
  }

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

  if (
    validator.isEmpty(password) ||
    !validator.isLength(password, { min: 5 })
  ){
    return res.status(400).send('Invalid Password')
  }

  if(!validator.isEmail(email)) return res.status(400).send('Invalid Email')

  //Sanitizing Input
  const sanitizedEmail = validator.normalizeEmail(email)

  if(sanitizedEmail === false) {
    return res.status(400).send('Invalid Email')
  }

  //No such Email
  const user = await userRepository.findOne(sanitizedEmail)

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
  console.log('Currently Logged In User :::::', user.email || req.session.user.email)

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