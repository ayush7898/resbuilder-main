const roleModel = require('../model/roleModel')


exports.addRoles = async (req, res, next) => {
    try {
        const roles = ['admin','student']

        roles.forEach(async role=>{
          const findRole =   await roleModel.findOne({ type:role }) 
            if(!findRole){
                await roleModel.create({ type:role }) 
            }
        }) 

        return res.status(201).json({ message: "success", status:true })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}