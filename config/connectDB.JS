//require mongoose
const mongoose = require('mongoose');

//connect to database
const connect = async () =>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Connected to Database Successfully!')
        
    } catch (error) {
        console.log(error)
        
    }

}

//export connect
module.exports = connect;