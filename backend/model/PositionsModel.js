const {model} = require("mongoose");

const {PositionsSchema} = require ('../schemas/PositionsSchemas');

const PositionsModel = new model("Position", PositionsSchema);

module.exports = {PositionsModel};