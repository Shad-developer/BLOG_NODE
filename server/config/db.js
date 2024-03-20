const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect('mongodb+srv://uch24502:umair24502@cluster0.kymyzez.mongodb.net/NodeJsBlog');
        console.log(`Database Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;
