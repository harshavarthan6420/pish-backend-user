const express=require('express');
const router=express.Router();
const cors= require('cors');
const {test,registerUser,loginUser}=require('../controllers/authControllers')


// middleware 
router.use(
    cors()
)
router.post('/login',loginUser)
router.get('/',test)
router.post('/register',registerUser)
module.exports=router