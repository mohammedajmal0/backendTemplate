import mongoose from "mongoose";
import { IAdminUser } from "../interfaces/adminUser";

const adminUserSchema=new mongoose.Schema<IAdminUser>({
    name:{
        type:String
    },
    totalAmount:{
        type:Number
    },
    transaction:[{
        date:{
            type:Date
        },
        desc:{
            type:String
        },
        amount:{
            type:Number
        }
    }]
})

const adminUserModel=mongoose.model<IAdminUser>("adminUser_collections",adminUserSchema);

export default adminUserModel