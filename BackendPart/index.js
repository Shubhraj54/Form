import express from 'express';
import routers from './Routers/userRoutes.js';
import mongoDb from './Databases/mongo.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.use('/api',routers);
app.listen(PORT,()=>{  
    mongoDb();
    console.log('Server is running on port 3000');
})