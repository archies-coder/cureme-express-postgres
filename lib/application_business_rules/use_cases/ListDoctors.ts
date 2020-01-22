const ListDoctors = ({ doctorRepository }: any) => {
  return doctorRepository.find()
}

export default ListDoctors