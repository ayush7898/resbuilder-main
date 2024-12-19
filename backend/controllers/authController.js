const userModel = require('../model/userModel')
const roleModel = require('../model/roleModel')

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



exports.registerUser = async (req, res, next) => {  

    try {
        const { email, phoneNumber, password, roleId } = req.body


        const foundByEmail = await userModel.findOne({ email })
        const foundByPhone = await userModel.findOne({ phoneNumber })

        if (foundByEmail || foundByPhone) {
            return res.status(409).json({ message: "user alredy axist" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const user = await userModel.create({
            email,
            phoneNumber,
            password: hashedPassword,
            roleId
        })

        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(password, salt, function(err, hash) {
        //         user.password = hash
        //         user.save()
        //     });
        // });

        return res.status(201).json({ message: "user crraeted", user })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(404).json({ message: "email or password wrong" })
        }

        const token = jwt.sign({ id: user._id, email: user.email }, "ayush", { expiresIn: "20min" })

        return res.status(200).json({ message: "user loggedin", token, user })
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })
    }
}

exports.forgotPassword = (req, res, next) => {
    res.send('forgotPassword')
}

exports.resetPassword = (req, res, next) => {
    res.send('resetPassword')
}

exports.isLoggedin = (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "No token provided, authorization denied" });
        }

        const decoded = jwt.verify(token, "ayush");

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token, authorization denied", error: error.message });
    }
}