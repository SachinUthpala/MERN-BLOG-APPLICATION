import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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