const express=require('express');
const router=express.Router();
const cors= require('cors');
const {test,registerUser,loginUser}=require('../controllers/authControllers')
const corsOptionsDelegate = function (req, callback) {
    const corsOptions = { credentials: true }; 
    if (['http://localhost:3000', 'https://pish.onrender.com'].indexOf(req.header('Origin')) !== -1) {
      corsOptions.origin = req.header('Origin'); 
    } else {
      corsOptions.origin = false; 
    }
    callback(null, corsOptions);
  };

// middleware 
router.use(
    cors(corsOptionsDelegate)
)
router.post('/login',loginUser)
router.get('/',test)
router.post('/register',registerUser)
module.exports=router