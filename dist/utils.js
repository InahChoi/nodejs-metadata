"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Open-Graph-Scraper
var ogs = require("open-graph-scraper");
module.exports = {
    ogsinfo: function (url, fn) {
        return ogs({ url: url }, function (err, ret) {
            fn(err, ret);
        });
    },
};
