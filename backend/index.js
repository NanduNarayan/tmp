import express from "express";
import { PORT,TGP_DB_URI } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import TaskSchema from "./models/taskModel.js"

const app=express();
const Task=mongoose.model('Task',TaskSchema);
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Connection Success!")
})
app.post("/tasks",async (req,res)=>{
    try{
        console.log("Running tasks...")
    }catch (err){
        console.log(err)
    }
})


async function connectDB(client){
    try{
        await mongoose.connect(client);
        console.log(`Connection established to Database`);
        app.listen(PORT,()=>{
            console.log(`Connection established, listening to port : ${PORT}`);
        })       
    }catch (err){
        console.log(`Connection failed, ${err}`);
    }
}

connectDB(TGP_DB_URI);