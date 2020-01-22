import * as express from 'express'
import { list, create } from '../../../interface_adapters/controllers/DoctorController'

const router = express.Router()

//GET Doctors List
router.get('/api/doctors', list)
// POST Doctor
router.post('/api/doctor', create)

export default router