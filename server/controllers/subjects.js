import Subject from '../models/subjects'


export const createSubject = async(req, res, next) => {
    try {

        const newSubject = new Subject(req.body)
        await newSubject.save((err, data) => {
            if (err) {
                return res.json({ error: 'Somthing went wrong' })
            } else {
                return res.status(201).json(data)
            }
        })
    } catch (error) {
        return next(error, req, res, next)
    }


}
export const Subjectlist = async(req, res, next) => {
    try {
        await Subject.find()
            .populate('student')
            .exec((err, data) => {
                if (err) {
                    return res.json({ error: 'Somthing went wrong' })

                } else {
                    return res.status(200).json(data)
                }
            })

    } catch (error) {
        return next(error, req, res, next)
    }

}