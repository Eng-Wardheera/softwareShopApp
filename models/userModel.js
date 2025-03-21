import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: Number, 
        required: true 
    },
    isAdmin: { 
        type: Boolean, 
        required: true,
        default: false
    },
    address: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true, 
        default: 'https://cdn-icons-png.freepik.com/512/8188/8188362.png'
    },
    cart: [
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref:'products'
            },
            quantity:{
                type: Number, 
                required: true 
            }
        }
    ],
    wishlist: [
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'products'
            },
        }
    ],

})


const Users = mongoose.model('users', userSchema);

export default Users

