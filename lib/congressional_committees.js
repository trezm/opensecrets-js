var request = require('./request');

var init = function(apiKey) {
	return {
		congCmteIndus: function(cmte, congno, indus, output, callback) {
			request.get('', {
				method: 'congCmteIndus',
				cmte: cmte,
				congno: congno,
				indus: indus,
				output: output,
				apikey: apiKey
			}, callback)
		}
	}
}

module.exports = init;
