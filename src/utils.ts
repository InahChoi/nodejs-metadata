// Open-Graph-Scraper
const ogs = require("open-graph-scraper");
module.exports = {
  ogsinfo(url, fn) {
    return ogs({ url: url }, (err, ret) => {
      fn(err, ret);
    });
  },
};
