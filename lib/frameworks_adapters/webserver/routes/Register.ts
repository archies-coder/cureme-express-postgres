import * as express from 'express'
import {create} from '../../../interface_adapters/controllers/UsersController'

const router = express.Router()

router.post('/api/register', create)

export default router