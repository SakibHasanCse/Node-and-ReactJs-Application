import { createSubject, Subjectlist } from '../controllers/subjects'
import express from 'express'
const router = express.Router()
import { handleValidation } from '../helpers/handleValidation'
import Subject from '../models/validator/subject'

router.post('/subject', handleValidation(Subject), createSubject)
router.get('/subject/:id', Subjectlist)
    // router.get('/subject', Subjectlist)

export default router