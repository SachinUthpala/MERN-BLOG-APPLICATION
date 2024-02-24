import express from 'express'
import { signup } from '../Controler/Auth.Control.js';


const router = express.Router();


// request is the data that we are going to send to the database 
// response means that the data give to us from the database 

router.post("/signUp" , signup);

export default router