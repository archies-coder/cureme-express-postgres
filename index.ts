import { createServer } from './lib/frameworks_adapters/webserver/server'
import { PORT } from './config/config'
import {connection } from './lib/frameworks_adapters/database/typeorm'
import 'reflect-metadata'
// import * as CONFIG from './ormconfig.json'
// import { createConnection } from 'typeorm'
import User from './lib/frameworks_adapters/database/models/User'
import Appointment from './lib/frameworks_adapters/database/models/Appointment'
import Doctor from './lib/frameworks_adapters/database/models/Doctor'

const start = async () => {
  try {
    await connection()
      .then(cn=> cn.manager.count(User)
        .then(no=> console.log(no)))
      .catch(err=> console.log(err))

    console.log('Connection to DB has been established successfully. ')

  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  try {

    const app = await createServer()

    app.listen(PORT, () => console.log(`Server running at 'http://localhost:${PORT}`))

  } catch (error) {

    console.log(error)
    process.exit(1)

  }
}

start()
