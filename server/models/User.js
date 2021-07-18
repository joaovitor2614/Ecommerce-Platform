
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 10,
       },
    useEmailAvatar: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('products', UserSchema);