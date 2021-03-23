import { createStudent, Studentlist } from '../controllers/students'
import express from 'express'
const router = express.Router()

router.post('/student', createStudent)
router.get('/students', Studentlist)

export default router