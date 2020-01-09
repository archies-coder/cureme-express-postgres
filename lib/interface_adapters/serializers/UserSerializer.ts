const _serializeSingleUser = (user: any) => {
  return {
    'id': user.id,
    'first-name': user.firstName,
    'last-name': user.lastName,
    'email': user.email,
  }
}

export default class UserSerializer {

  serialize(data: any) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null')
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser)
    }
    return _serializeSingleUser(data)
  }
}