const _serializeSingleAppointment = (appointment: any) => {
  return {
    'id': appointment.id,
    'patient-id': appointment.patientID,
    'doctor-id': appointment.doctorID,
    'date': appointment.date,
    'time': appointment.time
  }
}

export default class AppointmentSerializer {

  serialize(data: any) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null')
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleAppointment)
    }
    return _serializeSingleAppointment(data)
  }
}