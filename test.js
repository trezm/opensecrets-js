var key = "a2810bc194384a049f6a7fb646d897ad"
var OpenSecrets = require('./lib/opensecrets')(key);

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