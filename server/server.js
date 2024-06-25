const express = require('express')
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

const mongoose = require('mongoose')

const user = "asifane"
const pawd = "MXfGxLXGFqDKqKno"

mongoose.connect("mongodb+srv://asifane:MXfGxLXGFqDKqKno@cluster0.htckwbr.mongodb.net/workshopiot?retryWrites=true&w=majority&appName=Cluster0");

const deviceModel = require ('./models/Devices')

/* const device_list = [
    {id:1, status:"ON", name:"LED", type:"light"},
    {id:2, status:"ON", name:"AC", type:"air_cond"},
    {id:3, status:"OFF", name:"BLIND", type:"blind"},
  ]
 */

// endpoint : fetch devices from db
app.get("/devices",async(req,res)=>{
    const devices = await deviceModel.find()
    res.json(devices)
})

//endoint: create new device in db
app.post("/createDevice",async(req,res)=>{
    const device = req.body;
    console.log("toogling request ",device.key)
    const newDevice = new deviceModel(device);
    await newDevice.save();
    res.json(device)
})

//endoint: toogle a device
app.post("/toogle",async(req,res)=>{
    const device = req.body;
    console.log("toogling request ",device)
    const devicefinded = await deviceModel.findOne({ id: Number(device.id) })
    console.log(devicefinded)
    if (devicefinded)
        {
            const currentStatus = devicefinded.status
            const newStatus = !currentStatus
            await deviceModel.updateOne({ id: Number(device.id)},{status:newStatus})
        } 
    
    res.json(device)
})

//endoint: delete a device 
app.post("/deleteDevice",async(req,res)=>{
    const device = req.body;
    console.log("deleting request",device)
    await deviceModel.deleteOne({ id: device.id })
    res.json(device)
})



app.listen(3001,()=>{

    console.log("hello")
})