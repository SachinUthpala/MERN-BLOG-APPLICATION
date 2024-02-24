import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import UserRout from './Routs/User.rout.js'

dotenv.config()

const app = express()
const rPort = 3000
const ConnetMongoDB = process.env.MODB

mongoose.connect(ConnetMongoDB ).then(() => {
    console.log('DB Connection is Sucessfull 🌍♨️♨️♨️')
});


app.listen ( rPort , () => {
    console.log(`Server Is Running on Port Number : ${rPort} Sucessfully..😍🌍`);
})


// request is the data that we are going to send to the database 
// response means that the data give to us from the database 

app.use("/api/user" , UserRout)
