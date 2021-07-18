const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
   productName: {
       type: String,
       required: true,
       min: 2,
       max: 30
   },
   productImage: {
    type: String,
    required: true,
    
   },
    productAmount: {
        type: Number,
        required: true,
        min: 1,
    productPrice: {
        type: mongoose.Decimal128,
        required: true
    },
    productDetails: {
        type: Array
    },
    productWarranty: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
}
});

module.exports =  Product = mongoose.model('products', ProductSchema);