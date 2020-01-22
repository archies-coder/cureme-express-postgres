import * as express from 'express'
import { list } from '../../../interface_adapters/controllers/AppointmentController'

const router = express.Router()

//GET Appointments
router.get('/api/appointments', list)

export default router