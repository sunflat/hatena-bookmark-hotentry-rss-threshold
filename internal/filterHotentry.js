const { parseString, Builder } = require('xml2js');

function filterJson(json, { threshold }, callback) {
  let channel_items = json['rdf:RDF'].channel[0].items[0]['rdf:Seq'][0]['rdf:li'];
  let items = json['rdf:RDF'].item;
  for(let i=0; i<items.length; ++i) {
    const item = items[i];
    if (parseInt(item['hatena:bookmarkcount']) < threshold) {
      items.splice(i--, 1);
      let url = item['$']['rdf:about'];

      // delete from channel_items
      for(let j=0; j<channel_items.length; ++j) {
        const citem = channel_items[j];
        if (citem['$']['rdf:resource'] == url) {
          channel_items.splice(j--, 1);
        }
      }
    }
  }
  json['rdf:RDF'].channel[0].title[0] += ' - Filtered';
  callback(json);
}

exports.filterHotentry = (xml, options, callback) => {
  parseString(xml, (err, json) => {
    filterJson(json, options, (resultJson) => {
      let builder = new Builder();
      let result = builder.buildObject(resultJson);
      callback(result);
    });
  });
}