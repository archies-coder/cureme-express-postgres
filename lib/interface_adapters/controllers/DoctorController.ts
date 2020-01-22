import * as express from 'express'
import DoctorRepositoryPSQL from './../storage/DoctorRepositoryPSQL'
import DoctorRepository from './../../application_business_rules/repositories/DoctorRepository'
import CreateDoctor from './../../application_business_rules/use_cases/CreateDoctor'
import ListDoctors from './../../application_business_rules/use_cases/ListDoctors'

const doctorRepository = new DoctorRepository(new DoctorRepositoryPSQL())

const list = async (_: express.Request, res: express.Response) => {
  return res.send(await ListDoctors({ doctorRepository } as any))
}

const create = async (req: express.Request, res: express.Response) => {
  const { fName, lName, email, degree } = req.body

  return res.send(await CreateDoctor(fName, lName, email, degree, { doctorRepository }))
}

export { list, create }