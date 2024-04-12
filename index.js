const express=require('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const mongoose=require('mongoose')
const app=express();


mongoose.connect("mongodb+srv://user:user@users.h5esfgv.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log('Database connected'))
.catch((err)=> console.log('Database not connected',err))

app.use(express.json())

app.use('/',require('./routes/authRoutes'))

const port = 3002;
app.listen(port, ()=> console.log('Server is running ${port}'))
