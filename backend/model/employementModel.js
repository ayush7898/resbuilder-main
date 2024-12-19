const mongoose = require('mongoose')
const { Schema } = require('mongoose')



const employemntSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
        // unique: true
    },
    companyName: {
        type: String,
        // required: true
    },
    position: {
        type: String,
        // required: true
    },
    description: [{
        type: String
    }],
    startDate: {
        type: Date,
        // required: true
    },
    endDate: {
        type: Date,
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
},{timestamps:true})
module.exports = mongoose.model('employement', employemntSchema);