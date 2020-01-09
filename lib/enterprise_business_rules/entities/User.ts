export default class User {
  id?: number | null
  firstName!: string
  lastName!: string
  email!: string
  password!: string

  constructor(id = null, fName: string, lName: string, email: string, password: string) {
    this.id = id
    this.firstName = fName
    this.lastName = lName
    this.email = email
    this.password = password
  }
}
