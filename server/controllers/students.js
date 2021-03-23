import Student from '../models/students'


export const createStudent = async(req, res, next) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save((err, data) => {
            if (err) {
                return res.json({ error: 'Somthing went wrong' })
            } else {
                return res.status(201).json(data)
            }
        })
    } catch (error) {
        return next(err, req, res, next)

    }


}
export const Studentlist = async(req, res, next) => {
    try {
        await Student.find()

        .exec((err, data) => {
            if (err) {
                return res.json({ error: 'Somthing went wrong' })
            } else {
                return res.status(200).json(data)
            }
        })

    } catch (error) {
        return next(err, req, res, next)
    }

}