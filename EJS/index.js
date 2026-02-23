const express=require('express');
const app=express()
const path=require('path');
const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));

app.get("/app", (req, res) => {
    res.send("Hello");
});
//rendering the pages
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/random",(req,res)=>{
    // if we want to we can also write the math.random( function here also ..for now we have written in the .ejs file only)//
    //generally we have to wrrite teh data that is collected from ther database to here and then we can pass it to the .ejs file
    res.render("random.ejs");
});


//instgram interface:
app.get("/instagram/:username",(req,res)=>{
    const followers=["Raji","ABHI","Dhamini","Gangadhar","srinivas","Srihari"];
    let {username}=req.params;
    res.render("instagram",{username,followers});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});