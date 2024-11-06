import { Schema, model,  Types } from 'mongoose';
import { Location, City } from '../interfaces/location.interface';

const locationSchema = new Schema<Location>({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "defaultCity.png",
    },
    city: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
    
const LocationModel = model<Location>('Location', locationSchema)

export default LocationModel

