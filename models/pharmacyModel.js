import mongoose from "mongoose";
import { Schema } from "mongoose";

const pharmacySchema = new Schema({
    drug_name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    unit_pricing: {
        type: String,
        required: true
    },

    drug_code: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
});

const pharmacy = mongoose.model('pharmacy', pharmacySchema)

export default pharmacy