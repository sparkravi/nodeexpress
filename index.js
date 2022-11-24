const express=require("express")
const app=express()
const cors=require("cors")
const port=2022;

const employee={id:66,Name:"ganesh",position:"manager"}
const students=require("./data.js")

app.use(cors())
app.get("/",(req,res)=>{
    res.send("arey ganesh intiki pooo bey route")
})

app.get("/emp",(req,res)=>{
    res.json(employee)
})
app.get("/students-list",(req,res)=>{
    res.json(students)
})
app.listen(port,()=>console.log("server running on port 2022"))