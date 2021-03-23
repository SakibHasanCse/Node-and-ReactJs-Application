import Student from '../models/students'
import Subject from '../models/subjects'
import { validationResult } from 'express-validator'


export const createStudent = async(req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json({ error: errors.array() })

        }
        const newStudent = new Student(req.body)
        await newStudent.save((err, data) => {
            if (err) {} else {
                return res.status(201).json(data)
            }
        })
    } catch (error) {
        return next(error)

    }


}
export const Studentlist = async(req, res, next) => {
    try {
        await Student.find()

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