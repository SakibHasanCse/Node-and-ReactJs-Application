import mongoose from 'mongoose';

export const ConnectDatabase = (url) => {
    mongoose.connect(url, { useUnifiedTopology: true, useFindAndModify: true })
        .then(result => {
            console.log('Database connected Successfully')
        }).catch(err => {
            console.log('Database connection faild')
            console.log('Database connection faild', err)
        })
}