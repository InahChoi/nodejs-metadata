"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var utils = require("../utils");
// get
var Metadatas = require("../schema/metadata");
router.get("/metadatas", function (req, res) {
    Metadatas.find(function (error, metadata) {
        res.json(metadata);
    });
});
// post
router.post("/metadata", function (req, res) {
    var url = req.body.url;
    utils.ogsinfo(url, function (err, ret) {
        var metadatas = new Metadatas({
            date: ret.ogDate,
            description: ret.ogDescription,
            image: ret.ogImage.url,
            publisher: ret.ogSiteName,
            title: ret.ogTitle,
            url: ret.ogUrl,
        });
        metadatas.save(function (err, metadata) {
            res.json(metadata);
        });
    });
});
module.exports = router;
