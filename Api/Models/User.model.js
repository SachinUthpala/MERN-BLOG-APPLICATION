import mongoose, { Schema } from "mongoose";

const userShema = new mongoose.Schema  ({
    userName : {
        type : String,
        require :true,
        unique : true,
    },

    email : {
        type : String,
        require :true,
        unique : true,
    },

    password : {
        type : String,
        require : true
    }
},{timestamps : true});

const User = mongoose.model("User" , userShema);

export default User;