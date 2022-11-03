import express from 'express'
const app=express();

app.get('/restapi',(req,res)=>{
    res.send(JSON.stringify({message:"Welcome to Node JS",
    articleData:{
        articleName: "How to send JSON response from NodeJS from Framework using visual Studio",
        category:"NodeJS",
        status: "WIP"
    },
    endingMessage:"Good Start of Express"  }))
    
})
app.listen(9999,()=>{
    console.log("Server is listening")
});