var http = require('http');
var xml2js = require('xml2js');
var constants = require('./constants');

var buildQueryURL = function(params) {
	var paramArray = [];
	for (var key in params) {
		paramArray.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
	}

	return '?' + paramArray.join("&");
}

var request = {
	get: function(path, params, callback) {

		var options = {
			hostname: constants.host,
			method: 'GET',
			path: constants.basePath + '/' + path + buildQueryURL(params),
			headers: constants.headers
		}

		var req = http.request(
			options,
			function(res) {
				var results = "";

				res.on('data', function(chunk) {
					results += chunk
				});

				res.on('end', function() {
					var xml = results;
					xml2js.parseString(xml, function(error, results) {
						if (error) {
							callback({
								error: error,
								content: xml
							})
							return;
						}

						callback(null, results);
					});
				});
			});
		req.end();

		req.on('error', function(error) {
			callback(error);
		})
	}
}

module.exports = request;