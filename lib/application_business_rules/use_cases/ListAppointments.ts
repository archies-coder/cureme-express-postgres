const ListAppointments = ({appointmentRepository}: any) => {
  return appointmentRepository.find()
}

export default ListAppointments