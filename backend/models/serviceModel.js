import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : true
    }
})

const serviceModel = mongoose.models.service || mongoose.model('service', serviceSchema)

export default serviceModel