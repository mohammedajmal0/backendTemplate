import mongoose from "mongoose";
import { ICollector } from "../interfaces/collector";

const collectorSchema=new mongoose.Schema<ICollector>({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['active','deleted'],
        default:'active'
    },
    createdAt:{
        type:Date
    }
})

const collectorModel=mongoose.model<ICollector>("collector_collections",collectorSchema)

export default collectorModel