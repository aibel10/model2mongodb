var express=require('express');
require("./db")
var emp=require('./model/employee');
var app =express();
var port=3999;

app.use(express.json());

app.post('/',(req,res)=>{
    try{
        emp(req.body).save();
        res.send("Data added")
    }catch(error){
        res.send("error")
    }    
})

app.get('/',async(req,res)=>{
    try{
        var data= await emp.find();
        res.send(data)
    }catch(error){
        res.send(error)
    }
})

// delete
app.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await emp.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    }catch(error){
        res.send(error)
    }
})

app.put('/:id',async(req,res)=>{
    try{
        await emp.findByIdAndUpdate(req.params.id,req.body);
        res.send("Data updated")
        console.log(req.params.id)
       }catch(error){
        res.send(error)
    }
})

app.listen(port,()=>{
    console.log('server is up and running in ${port}')
})
