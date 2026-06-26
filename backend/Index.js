import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import { Employee } from "./models/employee.js"
import e from "express"


mongoose.connect("mongodb://localhost:27017/EMS")
.then(()=>{console.log("monogoDB connected successfully")})
.catch((error)=>{console.log("connection failed")})


const server=express();
server.use(express.json());

server.use(cors({origin:"http://localhost:5173"}))
server.listen(5000,()=>{console.log("server start at port 5000")});
server.post("/addEmp",async(req,res)=>
    {
    try{
        const{name,age,designation,Salary}=req.body
        console.log(name,age,designation,Salary)
        const exist=await Employee.findOne({name:name})
        if(exist){
            return res.status(400).json({message:"Employee already registered"});
        }
        const newEmp=new Employee({
           name:name,
           age:age,
           designation:designation,
           salary:Salary, 
        })
        await newEmp.save();
        return res.status(200).json({message:"success"})
    }
    catch(e)                   
        {
            console.log(e)
            res.status(500).json({message:"server error occured"})
        }
    });

    server.get("/getEmp",async(req,res)=>{
        try{
            const allEmployee=await Employee.find();
            return res.status(200).json({message:"all employees get",Employees:allEmployee});

        }
        catch(e)
        {
        console.log(e)
        res.status(500).json({message:"server error occured"})

        }
    
    })
    server.get("/getEmpDetails/:id",async(req,res)=>{
    try
       {
        const id=req.params.id
          console.log("hit",id);
          const details=await Employee.findById(id)
          return res.status(200).json({message:"sucess",details});
        }
    catch(e)
       {
        console.log(e.respones)
         res.status(500).json({message:"server error occured"})

       }
    })
    server.put("/updateEmp/:id",async(req,res)=>{
        try
    {
        console.log(req.body)
        console.log(req.params.id)
        const{name,age,designation,Salary}=req.body
        const id=req.params.id
        if(!id||!name||!age||!designation||!Salary)
            {
               return res.status(400).json({message:"update not formed"});
            }
        const update=await Employee.findByIdAndUpdate(id,
            {
                name:name,
                age:age,
                designation:designation,
                salary:Salary,
            })
            return res.status(200).json({message:"update"})
    }
    catch(e)
    {
        console.log(e)
         res.status(500).json({message:"server error occured"})


    }
})
server.delete("/deleteEmp/:id",async(req,res)=>{
     try
     {
       const id=req.params.id
       const deleteEmp=await Employee.findByIdAndDelete(id)
       return res.status(200).json({message:"deleted"})
     }
    catch(e)
    {
      console.log(e)
      res.status(500).json({message:"not deleted"})
    }
})

        







