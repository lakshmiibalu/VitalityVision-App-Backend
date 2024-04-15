const mongoose = require("mongoose")

const dietSchema = new mongoose.Schema({

    Diet_Type: String,
    Recommended_Foods: Object

  })

  module.exports = mongoose.model("diet",dietSchema)