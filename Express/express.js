let express=require('express');
let app=express();
let port=3000;
// app.use((req,res,next)=>{
//     console.log("request received");
//     next();
//});

    //Sending response:
    // res.send({
    //     name:"apple",
    //     color:"red",
    // });
    //("HELLO EXPRESS JS THIS IS BASIC RESPONSE");
    //forming routes:
// });
app.listen(port,()=>{
    console.log(`Welcome to Express JS on port ${port}`);
});
    app.get("/",(req,res)=>{
        res.send("HELLO you contacted root path");
    });
//     app.get("/mango",(req,res)=>{
//         res.send("HELLO you have contacted mango path");
//     });
//     app.get("/grapes",(req,res)=>{
//         res.send("HELLO you have contacted grapes path");
//     });
//     app.get("/apple",(req,res)=>{
//         res.send("HELLO you have contacted apple path");
//     });
//     app.get("/apricot",(req,res)=>{
//         res.send("HELLO you have contacted apricot path");
//     });
//    app.use((req,res)=>{
//     res.status(200).send("This path does not exist");
// });
//using path parameters:
// app.get('/:username',(req,res)=>{
//     console.log(req.params);
//     res.send(`you have contacted path with username as ${req.params.username}`);
// });
//Query Strings:
app.get('/search',(req,res)=>{
    let {q}=req.query;
    if(!req){
        res.send("please provie a query string");
    }
    res.send(`you have searched for ${q}`);
});
