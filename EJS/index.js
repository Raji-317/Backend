const express=require('express');
const app=express()
const path=require('path');
const port=3000;


// app.use():it is a function whichh is used for to import teh static files from teh differnt folders
app.use(express.static(path.join(__dirname,"public")));//connect the css file from the public folder
// if we want to connect the other files then we have to get them like this if it is static file..


//if we want to import dynamic files then we use it
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));



//to send the response back from server to the client we use this method
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


//instgram interface:using teh data that we have stored in the array
// app.get("/instagram/:username",(req,res)=>{
//     const followers=["Raji","ABHI","Dhamini","Gangadhar","srinivas","Srihari"];
//     let {username}=req.params;
//     res.render("instagram",{username,followers});
// });

//now using the data from the database and rendering the page:
app.get("/instagram/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});