// require('dotenv').config({path:"./env"})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express"
import { app } from "./app.js";
// const app = express()

dotenv.config(
    {
        path:"./env"
    }
)

connectDB()
.then(()=>{

    app.on("error",(error)=>{
        console.log(`the very big fucking error is ${error}`);
        
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is runnig at ${process.env.PORT}`);
    })
    
})
.catch((error)=>{
    console.log("MONGO DB connection failed  !!!!!!!! :",error);
    
})

/*
import app from  express()


;(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("ERROR",(error)=>{
            console.log("ERROR ", error);
            throw error
        })
       app.listen(process.env.PORT,()=>{
             console.log(`the app is listiong on port: ${process.env.PORT}`);
             
       })
    } catch (error) {
        console.error("ERROR:",error);
        
    }
})()*/