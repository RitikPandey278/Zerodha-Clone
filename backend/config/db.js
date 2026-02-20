const mongoose = require ("mongoose");

const connectDB = async()=>{
    try{
        const mongoURI = " mongodb+srv://pandeyritik278:ManuZerodha278@cluster0.ap1fmu6.mongodb.net/Zerodha?appName=Cluster0";
         await mongoose.connect(mongoURI);
    console.log('MongoDB Atlas connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
