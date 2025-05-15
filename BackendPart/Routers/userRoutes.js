import express from 'express';
import User from '../Databases/userSchema.js';
const router = express.Router();

router.post('/login', async(req,res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message: 'Please provide username and password'});
    }
    try {
        const user = await User.find({username});
        if(!user){
            return res.status(401).json({message: 'Invalid username or password'});
        }
        if(user.password !== password){
            return res.status(401).json({message: 'Invalid username or password'});
        }
        return res.status(200).json({message: 'Login successful', user});

    }
    catch (err){
        return res.status(500).json({message: 'Server not responding', error: err.message});
    }
})

router.post('/register', async(req,res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message: 'Please provide username and password'});
    }
    try {
        const user = await User.findOne({username});
        if(user){
            return res.status(409).json({message: 'User already exists'});
        }
        const newUser = new User({username, password});
        await newUser.save();
        return res.status(201).json({message: 'User created successfully', user: newUser});
    }
    catch (err){
        return res.status(500).json({message: 'Server not responding', error: err.message});
    }
})

router.get('/users', async(req,res)=>{
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({message: 'No users found'});
        }
        return res.status(200).json({message: 'Users found', users});
    }
    catch (error){
        return res.status(500).json({message: 'Server not responding', error: error.message});
    }
})

export default router;