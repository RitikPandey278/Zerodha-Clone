const {model} = require("mongoose");

const {SellsSchema} = require('../schemas/SellsSchemas');

const SellsModel = new model('Sell', SellsSchema);

module.exports = {SellsModel};
