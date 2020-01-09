import * as express from 'express'
import { login } from '../../../interface_adapters/controllers/UsersController'

const router = express.Router()

router.post('/api/login', login)

export default router
