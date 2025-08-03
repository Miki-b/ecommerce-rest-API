const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        instock: {
            type: Boolean,
            default: 0,
        },
    },
    { timestamps: true }
    
);

productSchema.plugin(AutoIncrement, { inc_field: 'ProductId' });

module.exports = mongoose.model("Product", productSchema);

