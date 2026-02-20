const { Schema } = require("mongoose");

const UserSchema = new Schema({
    phone: String,
    name: String,
    email: String,
    password: String,
    createdAt:{
        type: Date,
        default: Date.now,
    }
})
module.exports = {UserSchema};