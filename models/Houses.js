const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HousesSchema = new Schema({
    titre: {
    type: String,
    required: true
  },
  address: {
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
  seller: {
    type: String,
    required: true
  },
  sellerContacts: {
    type: String,
    required: true
  },
  sellerEmail: {
    type: String,
    required: true
  },
  quartier: {
    type: String,
    required: true
  }
  ,
  amount: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  immobilier: {
    type: String,
    required: true
  },
  cours: {
    type: String,
    required: true
  },
  chambres: {
    type: Number,
    required: true
  },
  aventages: {
    type: String,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  downloadDocURLs: {
    type: []
  },
  aventages: {
    type: [],
    required: true
  },
  postedDate:{
    type: Date,
    default:Date.now
},
documents:{
  type:[],
  default:[]
},
updatedTime:{
  type: Date,
  default:Date.now
}
});
const Houses = mongoose.model("Houses", HousesSchema);

module.exports = Houses;