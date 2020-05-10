const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HousesSchema = new Schema({
    title: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  descriptions: {
    type: String,
    required: true
  },
  images:{
    type: []
  },
  owner: {
    type: String,
    required: true,
    unique: true
  },
  
  length: {
    type: String,
    required: true
  }
  ,
  larg: {
    type: String,
    required: true
  },
  autreInfos: {
    type: String,
    required: true
  },
  postedDate:{
    type: Date,
    default:Date.now
},
updatedTime:{
  type: Date,
  default:Date.now
}
});

const Houses = mongoose.model("Houses", HousesSchema);

module.exports = Houses;