const express = require("express");
let app = express();
const mongoose = require("mongoose");
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/images")));
app.use(express.static(path.join(__dirname,"/public/data")));



app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/cart",(req,res)=>{
    res.render("cart");
})

app.get("/fullmenu",(req,res)=>{
    res.render("fullmenu");
})

app.listen("3000",()=>{
    console.log("App is listening to port 3000");
})