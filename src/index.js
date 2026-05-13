// require('dotenv').config({path: './env'}); // can improve
import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config({path: './env'});



connectDB();

// function connectDB(){}

// connectDB();  // we can do better





/*
import express from 'express'
const app = expresss()
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", ()=>{
            console.log("ERRR:", error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on prt ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.error("ERROR",error);
        throw error;
    }
})()
    */        // 1st approach to connect to db and start server