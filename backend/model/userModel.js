const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    personalDetail:{
        type: Schema.Types.ObjectId,
        ref: 'PersonalDetail',
    },
    education:[{
        type: Schema.Types.ObjectId,
        ref: 'education',
    }],
    employment:[{
        type: Schema.Types.ObjectId,
        ref: 'employemnt',
    }],  
    userskill: [{
        type: Schema.Types.ObjectId,
        ref: 'UserSkill',
    }],
    roleId:{
        type: Schema.Types.ObjectId,
        ref: 'role',
    }
},{timestamps:true})
module.exports = mongoose.model('User', UserSchema)