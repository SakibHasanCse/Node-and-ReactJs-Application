import { createSubject, Subjectlist } from '../controllers/subjects'
import express from 'express'
const router = express.Router()
import { handleValidation } from '../helpers/handleValidation'
import Subject from '../models/validator/subject'

router.post('/subject', handleValidation(Subject), createSubject)
router.get('/subjects', Subjectlist)

export default router