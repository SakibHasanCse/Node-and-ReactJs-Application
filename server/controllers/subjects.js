import Subject from '../models/subjects'
import Student from '../models/students'

import mongoose from 'mongoose'

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
    // export const Subjectlist = async(req, res, next) => {
    //     try {
    //         const student = req.params.id
    //         await Student.findOne({ _id: student })
    //             .select('name')
    //             .exec((err, student) => {
    //                 if (err || !student) {
    //                     return res.json({ error: 'Student not found with this name' })
    //                 }
    //                 Subject.find({ student })
    //                     .select('name')
    //                     .exec((err, subjects) => {
    //                         if (err) {
    //                             return next(err, req, res, next)
    //                         } else {

//                             return res.status(200).json({ subjects, student })
//                         }
//                     })
//             })



//     } catch (error) {
//         return next(error, req, res, next)
//     }

// }

export const Subjectlist = async(req, res, next) => {
    try {

        var id = mongoose.Types.ObjectId(req.params.id);
        await Student.aggregate([{
                    $match: {
                        _id: id,
                    }
                },
                {
                    $lookup: {
                        from: 'subjects',
                        localField: "_id",
                        foreignField: "student",
                        as: 'subjects'
                    }
                },

            ])
            .exec((err, subjects) => {
                if (err) {
                    return next(err, req, res, next)
                } else {

                    return res.status(200).json(subjects)
                }


            })


    } catch (error) {
        return next(error, req, res, next)
    }

}