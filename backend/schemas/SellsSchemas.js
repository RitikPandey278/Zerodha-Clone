const {Schema} = require("mongoose");

const SellsSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    soldAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = {SellsSchema}
