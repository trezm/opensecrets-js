
var request = require('./request');

var init = function(apiKey) {
	return {
		candSummary: function(stateID, callback) {
			request.get('', {
				method: 'getLegislators',
				id: stateID,
				apikey: apiKey
			}, callback);
		},

		candContrib: function(cid, cycle, output, callback) {
			request.get('', {
				method: 'candContrib',
				cid: cid,
				cycle: cycle,
				output: output,
				apikey: apiKey
			}, callback)
		},

		candIndustry: function(cid, cycle, output, callback) {
			request.get('', {
				method: 'candIndustry',
				cid: cid,
				cycle: cycle,
				output: output,
				apikey: apiKey
			}, callback)
		},

		candIndByInd: function(cid, cycle, ind) {
			request.get('', {
				method: 'candIndByInd',
				cid: cid,
				cycle: cycle,
				ind: ind,
				apikey: apiKey
			}, callback)
		},

		candSector: function() {
			request.get('', {
				method: 'candSector',
				cid: cid,
				cycle: cycle,
				output: output,
				apikey: apiKey
			}, callback)
		}
	}
}

module.exports = init;