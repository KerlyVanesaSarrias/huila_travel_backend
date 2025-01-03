import { Schema, Types, model } from "mongoose";
import { TouristPlan } from "../interfaces/tourisPlan.interface";
import { imageDefault, imagesDefault } from "../constants";


const touristPlanSchema = new Schema<TouristPlan>({
    location: {
        type: Types.ObjectId,
        ref: "Location",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    coverImage:{
        type:String,
        default: imageDefault
    },
    images: {
        type: [String],
        required: true,
        default: imagesDefault
    },
    available: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
    
const TouristPlanModel = model<TouristPlan>('TouristPlan', touristPlanSchema)

export default TouristPlanModel

