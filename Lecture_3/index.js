const express = require("express")
const app=express()
const path = require("path");



app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.listen(5000,()=>{
    console.log("listening on");
})

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data})
    }else{
        res.render("error.ejs")
    }

})

app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{diceValue});
})