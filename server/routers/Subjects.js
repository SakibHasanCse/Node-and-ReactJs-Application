import { createSubject, Subjectlist } from '../controllers/subjects'
import express from 'express'
const router = express.Router()

router.post('/subject', createSubject)
router.get('/subjects', Subjectlist)

export default router