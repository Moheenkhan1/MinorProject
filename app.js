const express = require("express");
const { request } = require("http");
let app = express();
const mongoose = require("mongoose");
const path = require("path");
// const fullMenuItems = require("/data/data.js");

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

app.get("/admin",(req,res)=>{
    res.render("admin");
})

app.delete("/admin/delete/:id",(res,req)=>{
  let { id}= req.params;
  let adminitem = fullMenuItems.find((p)=> id === p.id);
  res.send("delete successful", {fullMenuItems});
})

app.listen("8080",()=>{
    console.log("App is listening to port 8080");
})