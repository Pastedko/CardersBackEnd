const mongoose=require('mongoose');
require('../models/User');
//TODO add validation

const dbName='cardGame';
const username = encodeURIComponent("tedoxk");
const password = encodeURIComponent("sPPghGxcIhfryQWv");
const connectionString=`mongodb+srv://${username}:${password}@carder.66vssbl.mongodb.net/?retryWrites=true&w=majority`;
module.exports=async(app)=>{
    try{
    await mongoose.connect(connectionString,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('Database connected');
    mongoose.connection.on('error',(err)=>{
        console.log('Database error');
        console.log(err);
    })
}
catch(err){
    console.error('Error connection to database');
    process.exit(1);
}
};