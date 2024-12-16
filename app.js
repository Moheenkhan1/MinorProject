const express = require("express");
const { request } = require("http");
let app = express();
const mongoose = require("mongoose");
const path = require("path");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const wrapAsync =require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const ejsMate=require("ejs-mate");
const {isLoggedIn} = require("./middlewares.js"); 

const userRouter=require("./routes/user.js");

// Define sessionOptions object
const sessionOptions = {
    secret: "mysecret", 
    resave: false,      
    saveUninitialized: false, 
    cookie: {
        secure: false, 
        maxAge: 24 * 60 * 60 * 1000 
    }
};

mongoose.connect("mongodb://localhost:27017");  


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/images")));
app.use(express.static(path.join(__dirname,"/public/data")));



app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.engine('ejs',ejsMate);


app.use(session(sessionOptions));
app.use(flash());




app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

app.use("/",userRouter);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req,res)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.failureMsg = req.flash("failure");
    res.locals.currUser= req.user;
    res.render("home");
})
app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.failureMsg = req.flash("failure");
    next()
})

app.get("/cart",(req,res)=>{
    res.render("cart");
})

app.get("/fullmenu",(req,res)=>{
    res.render("fullmenu");
})
app.get("/payment",isLoggedIn,(req,res)=>{

    res.render("payment");
})



app.listen("8080",()=>{
    console.log("App is listening to port 8080");
})