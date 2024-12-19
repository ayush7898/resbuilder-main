const mongoose = require('mongoose')
const { Schema } = require('mongoose')



const educationSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    instituteName: {
        type: String,
        // required: true
    },
    university:{
        type: String,
        // required: true
    },
    stream:{
        type: String,
        // required: true
    },
    startDate: {
        type: Date,
        // required: true
    },
    endDate:{
        type:Date,
        // required:true
    },
    location: {
        type: String,
        // required: true
    },
},{timestamps:true})
module.exports = mongoose.model('educationDetail', educationSchema);