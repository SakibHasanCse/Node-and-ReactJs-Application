import { createStudent, Studentlist } from '../controllers/students'
import express from 'express'
const router = express.Router()
import { handleValidation } from '../helpers/handleValidation'
import Student from '../models/validator/student'

router.post('/student', handleValidation(Student), createStudent)
router.get('/students', Studentlist)

export default router