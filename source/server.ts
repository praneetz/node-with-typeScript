import express, {Request,Response}from "express"
const app=express()

app.get("/",(req:Request,res:Response):void=>{
    res.send("HOME PAGE")
})


app.listen(8080,()=>{console.log("Port is running at 8080")})