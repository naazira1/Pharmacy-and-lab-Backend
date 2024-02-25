import mongoose from "mongoose";
import {Schema} from "mongoose";

const labSchema = new Schema({
    labName: {
        type: String,
        required: true
    },

    labType: {
        type: String,
        required: true
    },

    mainCategory: {
        type: String,
        required: true
    },

    subCategory: {
        type: String,
        required: true
    },

    labCode: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});


const lab = mongoose.model('lab', labSchema)

export default lab;