const userModel = require('../model/userModel')
const persnalDetailModel = require('../model/persnalDetailModel')
const educationModel = require('../model/educationModel')
const employementModel = require('../model/employementModel')
const userSkillModel = require('../model/UserSkillModel')
const mongoose = require('mongoose')


exports.getMe = async (req, res, next) => {
    try {
        const {
            id
        } = req.user

        const user = await userModel.findOne({ _id: id })

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        const userId = new mongoose.Types.ObjectId(id)

        const persnalDetail = await persnalDetailModel.findOne({ userId })
        // console.log('persnalDetail',persnalDetail);
        
        const education = await educationModel.find({ userId })
        const employement = await employementModel.find({ userId })
        const UserSkill = await userSkillModel.find({ userId })

        return res.status(200).json({ message: "user fetched", user, persnalDetail, education, employement,UserSkill })


    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}

exports.updateMe = async (req, res, next) => {
    try {
        const {
            id
        } = req.user

        const user = await userModel.findOne({ _id: id })

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        const updatedUser = await userModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })

        return res.status(200).json({ message: "user updated", user: updatedUser })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}
exports.addMoreDetail = async (req, res, next) => {
    try {
        const {
            id
        } = req.user

        const user = await persnalDetailModel.findOne({ userId: id })

            console.log('user', user);

        if (!user) {
            const persnalDetail = await persnalDetailModel.create({ userId: id, ...req.body })
            console.log('persnalDetailCreated..1',persnalDetail);
            
            await userModel.findOneAndUpdate({ _id: id }, { personalDetail: persnalDetail._id }, { new: true })
            
            return res.status(201).json({ message: "detail added", persnalDetail })
        } else {
            const persnalDetail = await persnalDetailModel.findOneAndUpdate({ userId: id }, { ...req.body }, { new: true })
            console.log('persnalDetailUpdated..2',persnalDetail);
            return res.status(201).json({ message: "detail updated", persnalDetail })
        }

    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}
exports.educationDetail = async (req, res, next) => {
    try {
        const { id } = req.user
        
        const user = await educationModel.findOne({ userId: id })
        console.log('user', user);
        
        if (!user) {
            const educationDetail = await educationModel.create({ userId: id, ...req.body })
            console.log('educationDetail...1', educationDetail);
            // await userModel.findOneAndUpdate({ _id: id }, { educationDetail: educationDetail._id }, { new: true })
            return res.status(201).json({ message: "education detail create", educationDetail })

        } else {
            const educationDetail = await educationModel.create({ userId: id, ...req.body })
            
            // const educationDetail = await educationModel.findOneAndUpdate({ userId: id }, { ...req.body }, { new: true })
            console.log('educationDetail...2', educationDetail);
            return res.status(200).json({ message: "education detail create", educationDetail })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}
exports.updateEducationDetail = async (req, res, next) => {
    try {
        const { id } = req.params
        const education = await educationModel.findOne({ _id: id })
        if (!education) {
            return res.status(404).json({ message: "education not found" })
        } else {
            const educationDetail = await educationModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
            return res.status(200).json({ message: "education detail updated", educationDetail })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}
exports.updateEmploymentDetail = async (req, res, next) => {
    try {
        const { id } = req.params
        const employement = await employementModel.findOne({ _id: id })
        if (!employement) {
            return res.status(404).json({ message: "education not found" })
        } else {
            const employementDetail = await employementModel.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
            return res.status(200).json({ message: "employement detail updated", employementDetail })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}
exports.employementDetail = async (req, res, next) => {
    try {
        const { id } = req.user
        const user = await employementModel.findOne({ userId: id })
        if (!user) {
            const employmentdetail = await employementModel.create({ userId: id, ...req.body })
            
            // await userModel.findOneAndUpdate({ _id: id }, { employmentdetail: employmentdetail._id }, { new: true })
            return res.status(200).json({ message: "employment detail Created..1", employmentdetail })
        } else {
            const employmentdetail = await employementModel.create({ userId: id, ...req.body })
            // const employmentdetail = await employementModel.findOneAndUpdate({ userId: id }, { ...req.body }, { new: true })
            return res.status(200).json({ message: "employment detail Created..2", employmentdetail })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}
exports.addUserSkill = async (req, res, next) => {
    try {
        const {
            title
        } = req.body
console.log('title', title);

        const { id } = req.user
console.log(id);

        if (!title.length) {
            return res.status(404).json({ message: "atleast one skill required" })
        }

        if (title && id) {
            skills = await userSkillModel.create({ title, userId: id })
        } else {
            console.log('title is required');
            
        }
        
        return res.status(201).json({ message: "skills added", skills })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}

exports.getUserSkill = async(req, res, next) => {
    try {
        const { id } = req.user
        const getSkill = await userSkillModel.find({ userId: id });

        if (!getSkill) {
            return res.status(404).json({ message: "Skill not found"})
        }
        return res.status(200).json({message: "Skill found", getSkill})
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error})
    }
}

exports.updateSkills = async (req, res, next) => {
    
        try {
            const { id } = req.params
            console.log('id', id);
         
            
            if (!id) {
                return res.status(404).json({message: "id is not found"})
            }
            
            const update = await userSkillModel.findOneAndUpdate({_id:id}, {...req.body}, {new: true})
            if (!update) {
                return res.status(404).json({message: "update is not found"})
                
            }
        
            return res.status(200).json({message: "User skill is update successfully", update})
    
        } catch (error) {
            return res.status(500).json({message: "Internal Server Error"})
        }    
   
}
