import {createConnection } from 'typeorm'

export const connection = () => {

  return createConnection({
    'type': 'postgres',
    'host': 'localhost',
    'port': 5432,
    'username': 'postgres',
    'password': 'admin',
    'database': 'postgres',
    'entities': [
      __dirname + '/models/*.js'
    ],
    'synchronize': true,
    'logging': false
  })
}