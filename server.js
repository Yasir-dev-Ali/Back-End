const express= require("express")
const app= express();

app.get('/',(req, res)=>{

 res.send("Hello Yasir This is Your Server");

});
app.get("/api/name",(req,res)=>{
    res.send("hello this is Your Name server Enjoye Your Day")
});

app.listen(4000,()=>console.log('Listening Your Ports 4000'));