const mongoose= require("mongoose");

const managerSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String

},{timestamps: true})
const manager = mongoose.model('manger',managerSchema);
module.exports = manager