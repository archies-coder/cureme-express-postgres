import Appointment from './../../enterprise_business_rules/entities/Appointment'
import Doctor from './../../enterprise_business_rules/entities/Doctor'

const CreateDoctor = (
  firstName: string,
  lastName: string,
  email: string,
  degree: string,
  { doctorRepository }: any,
  appointments?: Array<Appointment>
) => {
  const doctor = new Doctor(
    null,
    firstName,
    lastName,
    email,
    degree,
    appointments
  )
  return doctorRepository.persist(doctor)
}

export default CreateDoctor