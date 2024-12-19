const skillModel = require('../model/skillModel')


exports.addSkill = async (req, res, next) => {
    try {
        const {
            title
        } = req.body

        if (!title) {
            return res.status(404).json({ message: "title is required field" })
        }
        const skill = await skillModel.create({ title })

        return res.status(201).json({ message: "skill created", skill })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}

exports.getSkills = async (req, res, next) => {
    try {
        const skills = await skillModel.find()

        return res.status(201).json({ message: "skill fetched", skills })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}

