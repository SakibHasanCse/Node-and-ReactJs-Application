import Subject from '../models/subjects'
import Student from '../models/students'
import {} from '../utils/error'


export const createSubject = async(req, res, next) => {
    try {
        await Student.findOne({ _id: req.body.student })
            .exec((err, data) => {
                if (err || !data) {
                    return res.json({ error: 'Student not found with this name' })
                }
                const newSubject = new Subject(req.body)
                newSubject.save((err, data) => {
                    if (err) {
                        return next(err, req, res, next)
                    } else {
                        return res.status(201).json({ message: `"${data.name}" created successfully` })
                    }
                })
            })

    } catch (error) {
        return next(error, req, res, next)
    }


}
export const Subjectlist = async(req, res, next) => {
    try {
        const student = req.params.id
        await Subject.find({ student })
            .populate('student', 'name')
            .exec((err, data) => {
                if (err) {
                    return next(err, req, res, next)
                } else {

                    return res.status(200).json(data)
                }
            })

    } catch (error) {
        return next(error, req, res, next)
    }

}