var OpenSecrets = function(apiKey) {
	var members = require('./members')(apiKey);
	var candidates = require('./candidates')(apiKey);
	var congressionalCommittees = require('./congressional_committees')(apiKey);
	var organizations = require('./organizations')(apiKey);

	return {
		// Members
		getLegislators: function(stateID, callback) {
			members.getLegislators(stateID, callback);
		},

		memPFDprofile: function(year, cid, output, callback) {
			if (!callback) {
				callback = output;
				output = 'xml';
			}

			members.memPFDprofile(year, cid, output, callback);
		},

		// Candidates
		candSummary: function(stateID, callback) {
			candidates.candSummary(stateID, callback);
		},

		candContrib: function(cid, cycle, output, callback) {
			if (!callback) {
				callback = output;
				output = 'xml';
			}

			candidates.candContrib(cid, cycle, output, callback);
		},

		candIndustry: function(cid, cycle, output, callback) {
			if (!callback) {
				callback = output;
				output = 'xml';
			}

			candidates.candIndustry(cid, cycle, output, callback);
		},

		candIndByInd: function(cid, cycle, ind, callback) {
			candidates.candIndByInd(cid, cycle, ind, callback);
		},

		candSector: function(cid, cycle, output, callback) {
			if (!callback) {
				callback = output;
				output = 'xml';
			}

			candidates.candSector(cid, cycle, output, callback);
		},

		// Congressional Committees
		conCmteIndus: function(cmte, congno, indus, output, callback) {
			if (!callback) {
				callback = output;
				output = 'xml';
			}

			congressionalCommittees.congCmteIndus(cmte, congno, indus, output, callback);
		},

		// Organizations
		getOrgs: function(org, callback) {
			organizations.getOrgs(org, callback);
		},

		orgSummary: function(id, callback) {
			organizations.orgSummary(id, callback);
		}
	}
}


module.exports = OpenSecrets;