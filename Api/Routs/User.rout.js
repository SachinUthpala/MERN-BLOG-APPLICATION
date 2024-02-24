import express from 'express'
import { test } from '../Controler/User.Control.js';

const router = express.Router();

// request is the data that we are going to send to the database 
// response means that the data give to us from the database 

router.get("/test" , test);

export default router;