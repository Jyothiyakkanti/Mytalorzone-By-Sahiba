const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
        default: 1,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export Product Model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
