
fs = require("fs")

var fileName = "./key.json"
// File looks like { "apiKey": "zzz"}

// Load keys with error catching
var config

try {
  config = require(fileName)
}
catch (err) {
  config = {}
  console.log("unable to read file '" + fileName + "': ", err)
}

// Echo out key to make sure it's loaded correctly
//console.log(config.apiKey)

//Create the client

var OpenSecrets = require('./lib/opensecrets')(config.apiKey);
/*
OpenSecrets.getLegislators('ME', function(error, results) {
	console.log('error:', error);
	console.log('results:', JSON.stringify(results));
});
*/

OpenSecrets.candContrib('N00034584', '2014', function(error, results) {
	console.log('error:', error);
	console.log('results:', JSON.stringify(results, null, 2));
});
