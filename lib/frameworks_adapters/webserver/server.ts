import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Hello from './routes/Hello'
import Register from './routes/Register'
import Login from './routes/Login'
import Store from './../database/RedisStore'
import SessionManager from './../../interface_adapters/security/SessionManager'

export const createServer = async () => {
  const server = express()

  //Body-Parser
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  //CORS
  server.use(cors())

  //Session
  server.use(SessionManager(new Store().getStore()))

  //Default Route
  server.get('/', (req,res)=> {
    res.send('works')
  })

  //Main Routes
  server.use(Hello)
  server.use(Register)
  server.use(Login)

  //Server as Output
  return server
}
