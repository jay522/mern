const express=require('express');
const router=express.Router();
require('../db/conn'); //connection
const User=require('../model/userSchema'); 
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const authenticate=require("../middleware/authenticate")
const cookieParser=require("cookie-parser")

router.use(cookieParser());
router.get('/',(req,res)=>{
    res.send("Hello from server auth");
});
router.post('/contact',authenticate,async(req,res)=>{
    try{
    const {name,email,phone,message}=req.body;
        //  console.log(req.body)
    if(!name|| !email|| !phone|| !message){
        console.log("error in contact form");
        return res.json({error:"fill the contact form"});
    }

    const userContact= await User.findOne({_id:req.userID});
    // console.log(userContact)
    if(userContact){
        const userMessage=await userContact.addMessage(name,email,phone,message);
        await userContact.save();
        res.status(201).json({message:"message saved successfully"});
    }
}catch(err){
    console.log(err);
}
});

router.get('/about',authenticate,(req,res)=>{
    res.send(req.user);
});
router.get('/logout',(req,res)=>{
    res.clearCookie('jwt',{path:'/'})
    res.status(200).send("Logout Successfully");
});
router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.user);
});

router.post('/register',async (req,res)=>{

    const{name,email,phone,work,password,cpassword}=req.body;
        
    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
        return res.status(422).json({error:"Please fill the field properly"})
    }

    try{
        const userExist= await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
            }else if(password!==cpassword){
                res.status(422).send("Password are not matching")
            }

        const user=new User({name,email,phone,work,password,cpassword});
        await user.save();
        res.status(201).json({message:"registered successfully"});
    }catch(err){
        console.log(err);
    }
});



router.post('/signin',async(req,res)=>{
    try{
        const {email,password}=req.body;
        // check fields
        if(!email || !password){
            return res.status(400).json({error:"Please fill data properly"})
        }

        // check email
        const userLogin=await User.findOne({email:email});
        if(userLogin){
            // check password
            const isMatch=await bcrypt.compare(password,userLogin.password);
            const token=await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+258920000),httpOnly:true
            });
            if(!isMatch){
                res.status(400).json({error:"Invalid Credentials"});
            }else{
                res.status(201).json({message:"login successfully"});
            }
        }else{
            res.status(400).json({error:"Invalid Credentials"});
        }
        
    }catch(err){
        console.log(err);
    }
})


module.exports=router;