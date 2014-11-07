var request = require('./request');

var init = function(apiKey) {
	return {
		getLegislators: function(stateID, callback) {
			request.get('', {
				method: 'getLegislators',
				id: stateID,
				apikey: apiKey
			}, callback);
		},

		memPFDprofile: function(year, cid, output) {
			request.get('', {
				method: 'memPFDprofile',
				year: year,
				cid: cid,
				output: output,
				apikey: apiKey
			}, callback)
		}
	}
}

module.exports = init;
