import mongoose, { Schema } from "mongoose";
const schema = new Schema({
    first_name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 20,
    },    
    email: {
        type: String,
        required: true,
        maxlength: 20,
        unique: true,
    },
    street: {
        type: String,
        required: true,
        maxlength: 50,
    },
    city: {
        type: String,
        required: true,
        maxlength: 50,
    },
    state: {
        type: String,
        required: true,
        maxlength: 50,
    },
    zipcode: {
        type: String,
        required: true,
        maxlength: 10,
    },
    country: {
        type: String,
        required: true,
        maxlength: 50,
    },
    phone: {
        type: String,
        required: true,
        maxlength: 15,
    }
});

const Delivery = mongoose.model('Delivery', schema);

export default Delivery;
