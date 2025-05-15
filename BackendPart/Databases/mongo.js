import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoDb = async ()=> {
    try{
        await mongoose.connect(process.env.URI || 'mongodb://localhost:27017/Forms', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }
    catch(err){
        console.error('MongoDB connection error:', err);
    }
}

export default mongoDb;