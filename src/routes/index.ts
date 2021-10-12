import express  = require('express');
const app       = require('express')
const mongoose  = require('mongoose')
const router    = express.Router();
const utils     = require("../utils");

// get
const Metadatas = require("../schema/metadata");
router.get("/metadatas", (req, res) => {
  Metadatas.find((error, metadata) => {
    res.json(metadata);
  });
});

// post
router.post("/metadata", (req, res) => {
  const { url } = req.body;
  utils.ogsinfo(url, (err, ret) => {
    const metadatas = new Metadatas({
      date : ret.ogDate,
      description: ret.ogDescription,
      image: ret.ogImage.url,
      publisher: ret.ogSiteName,
      title: ret.ogTitle,
      url: ret.ogUrl,
    });
    metadatas.save((err, metadata) => {
      res.json(metadata);
    });
  });
});

module.exports = router;
