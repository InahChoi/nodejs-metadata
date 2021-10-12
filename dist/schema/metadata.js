"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Schema created
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
module.exports = mongoose.model('Metadatas', new Schema({
    date: { type: Date },
    description: { type: String },
    image: { type: String },
    publisher: { type: String },
    title: { type: String },
    url: { type: String },
}, { versionKey: false }));
