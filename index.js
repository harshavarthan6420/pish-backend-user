const express=require('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const mongoose=require('mongoose')
const app=express();
const corsOptionsDelegate = function (req, callback) {
    const corsOptions = { credentials: true }; 
    if (['http://localhost:3000', 'https://pish.onrender.com'].indexOf(req.header('Origin')) !== -1) {
      corsOptions.origin = req.header('Origin'); 
    } else {
      corsOptions.origin = false; 
    }
    callback(null, corsOptions);
  };
  
  app.use(cors(corsOptionsDelegate));

mongoose.connect("mongodb+srv://user:user@users.h5esfgv.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log('Database connected'))
.catch((err)=> console.log('Database not connected',err))

app.use(express.json())

app.use('/',require('./routes/authRoutes'))

const port = 3002;
app.listen(port, ()=> console.log('Server is running ${port}'))
