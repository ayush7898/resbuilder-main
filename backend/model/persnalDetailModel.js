const mongoose = require('mongoose')
const { Schema } = require('mongoose')



const PersonalDetailSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    discription: {
        type: String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    linkedin:{
        type:String
    },
    github:{
        type:String
    }
}, { timestamps: true })
module.exports = mongoose.model('PersonalDetail', PersonalDetailSchema);