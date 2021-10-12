// Schema created
import mongoose = require('mongoose')
const Schema    = mongoose.Schema
module.exports  = mongoose.model('Metadatas', new Schema({
    date : {type : Date},
    description : {type : String},
    image : {type : String},
    publisher : {type : String},
    title : {type : String},
    url : {type : String}, },
    {versionKey: false}
));

