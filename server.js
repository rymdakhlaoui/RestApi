//require exress
const express = require('express');
 //get instance from express
 const app =express();

 //body parser
 app.use(express.json());
 
 
 //require dotenv
 require("dotenv").config({ path:"./config/.env"});

 //get the PORT
 const PORT = process.env.PORT|| 5002;
 

 //create server
  app.listen(PORT, (error) => {
    error? console.log(error):
    console.log(`Server is running on http://127.0.0.1:${PORT}`);    
  })

  //require connectDB
 const connect= require('./config/connectDB');
 connect();

//require routes
app.use('/api/user', require('./routes/userRoutes'))


