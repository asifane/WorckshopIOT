const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type: String
    },
    type:{
        type: String
    },
    status:{
        type: Boolean
    }
})

const deviceModel = mongoose.model("devices", deviceSchema)


module.exports = deviceModel