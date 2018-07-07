const { readFile } = require('fs');
const { filterHotentry } = require('../internal/filterHotentry');

readFile(__dirname + '/hotentrySample.rss', function(err, data) {
  filterHotentry(data, { threshold: 400 }, (result) => {
    console.log(result);
  });
});
