const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const passport = require("passport");
const wrapAsync =require("../utils/wrapAsync.js")

router.get("/signup",(req,res)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.failureMsg = req.flash("failure");
    res.render("signup.ejs");
})

router.post("/signup", wrapAsync(async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const registeredUser= await User.register(newUser , password);
    
        console.log(registeredUser);
        req.flash("success","Welcome to Arabian..!");
        res.redirect("/")
    } catch(e){
        res.redirect("/signup")
        req.flash("error",e.message);
    }
}))

router.get("/login",(req,res)=>{
    res.render("login.ejs");
})

router.post("/login",passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}), async(req,res)=>{
    req.flash("success","Welcome Back To Arabian");
    res.redirect("/");
})

module.exports= router;