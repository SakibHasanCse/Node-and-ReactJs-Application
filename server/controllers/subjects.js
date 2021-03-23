import Subject from '../models/subjects'
import { validationResult } from 'express-validator'


export const createSubject = async(req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json({ error: errors.array() })
        }

        const newSubject = new Subject(req.body)
        await newSubject.save((err, data) => {
            if (err) {} else {
                return res.status(201).json(data)
            }
        })
    } catch (error) {
        return next(error)
    }


}
export const Subjectlist = async(req, res, next) => {
    try {
        await Subject.find()
            .populate('student')
            .exec((err, data) => {
                if (err) {

                } else {
                    return res.status(200).json(data)
                }
            })

    } catch (error) {
        return next(error)
    }

}