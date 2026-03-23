const express=require('express')
const mongoose=require('mongoose')
const {createTask, getAllTask ,removeTask, updateTask}=require("./CONTROLLERS/controllers")
const cors=require("cors")

// get mongo url from .env file 
require('dotenv').config()



// make app using express
const app=express()

// enables CORS for all domains
app.use(cors())


// parse json data
app.use(express.json())

// connect to mongoDB and process the mongo url
app.get('/',(req,res)=>{

  res.json({
    "message":"health ok"
  })
})
// api to get all task from db
app.get('/getTask',getAllTask)

// api to post tsk in db
app.post("/createTask",createTask)

// api for updation
app.patch("/updateTask/:id",updateTask)

// api to remove the task 
app.delete("/removeTask/:id",removeTask)















// listen  server requests
const PORT=8000
app.listen(PORT,()=>console.log(`listening on port http://localhost:${PORT}`))
