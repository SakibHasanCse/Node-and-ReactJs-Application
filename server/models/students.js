import mongoose from 'mongoose';
const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name can't be blank "],
    },
    email: {
        type: String,
        required: [true, "Email can't be blank "],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        lowercase: true,
    },
    phone: {
        type: Number,
        required: [true, "Phone can't be blank "]

    },
    Dateofbirth: {
        type: String,
        required: [true, "Date can't be blank "],
    }

}, { timestamps: true })
const Student = mongoose.model('Student', StudentSchema)
export default Student