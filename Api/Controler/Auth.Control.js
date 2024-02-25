import User from "../Models/User.model.js"
import bcryptjs from 'bcryptjs'
import { ErrorHandler } from './../Utils/Error.js';

export const signup = async(req,res,next) => {
    const {
        userName,
        email,
        password
    } = req.body;

    if(!userName || !email || !password || userName === '' || email=== '' || password === '' ){
        return res.status(400).json({massage : "All Feild Are Required"})
    }

    const hashPass = bcryptjs.hashSync(password , 10)

    const newUser = new User({
        userName,
        email,
        password : hashPass,
    })

    console.log(req.body)

    try {
        await newUser.save();
        res.json("SignUP Sucess");
    } catch (error) {
       next(error)
    }
}