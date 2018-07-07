const { get } = require('axios');
const { filterHotentry } = require('../internal/filterHotentry');

exports.handler = function (event, context, callback) {
  let url = 'http://b.hatena.ne.jp/hotentry.rss';
  get(url, { timeout: 5000 }).then((result) => {
    let threshold = parseInt(event.queryStringParameters.threshold) || 0;
    filterHotentry(result.data, { threshold }, (result) => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-type': 'text/xml; charset=utf-8' },
        body: result
      });
    });
  }).catch((e) => {
    console.error(e);
    callback(null, {
      statusCode: 500,
      body: "Internal Server Error\n"
    });
  });
};
