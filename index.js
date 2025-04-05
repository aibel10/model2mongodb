var express = require('express');
require("./db")

// init
var app=express();
var port=1000;
var sModel=require('./model/sample')

// mildware to add data to db
app.use(express.json());

// api to add data to db
app.post('/a',(req,res)=>{
    try{
        sModel(req.body).save();
        res.send("Data added")
    }catch(error){
        res.send("error")
    }    
})

app.get('/z',async(req,res)=>{
    try{
        var data= await sModel.find();
        res.send(data)
    }catch(error){
        res.send(error)
    }
})

// delete
app.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await sModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    }catch(error){
        res.send(error)
    }
})


app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`)
})