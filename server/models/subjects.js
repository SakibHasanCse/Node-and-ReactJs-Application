import mongoose from 'mongoose';
const SubjectsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name can't be blank "],
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'Student',
        required: [true, "Student id can't be blank "]

    },
}, { timestamps: true })
const Subjects = mongoose.model('Student', SubjectsSchema)
export default Subjects