import mongoose from "mongoose";

const rateSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    
})

export default rateSchema