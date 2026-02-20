const {model } = require("mongoose");

const {HoldingsSchema} = require('../schemas/HoldingSchemas');

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = {HoldingsModel};