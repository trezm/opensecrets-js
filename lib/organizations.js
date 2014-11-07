var request = require('./request');

var init = function(apiKey) {
	return {
		getOrgs: function(org, callback) {
			request.get('', {
				method: 'getOrgs',
				org: org,
				apikey: apiKey
			}, callback);
		},

		orgSummary: function(id, callback) {
			request.get('', {
				method: 'orgSummary',
				id: id,
				apikey: apiKey
			}, callback);
		}
	}
}

module.exports = init;
