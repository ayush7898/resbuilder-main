const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const SkillSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        // unique: true
    }
}, { timestamps: true })
module.exports = mongoose.model('UserSkill', SkillSchema)