import express from 'express';
const router=express.Router();
import {register,login} from "../Controller/authController.js";

// create  testing api 
router.get('/test', (req, res) => {
    res.send("auth  testing route is working")
})
//create user
router.post('/register',register);
//login
router.post('/login',login);
export default router;