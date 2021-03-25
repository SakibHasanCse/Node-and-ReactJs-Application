import Student from '../models/students'


export const createStudent = async(req, res, next) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save((err, data) => {
            if (err) {
                return next(err, req, res, next)
            } else {
                return res.status(201).json({ message: `"${data.name}" Created Successfully` })
            }
        })
    } catch (error) {

        return next(error, req, res, next)

    }


}


export const Studentlist = async(req, res, next) => {
    try {
        await Student.aggregate([{
                $lookup: {
                    from: 'subjects',

                    localField: "_id",
                    foreignField: "student",
                    as: 'Books'
                }
            }])
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