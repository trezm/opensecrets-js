# opensecrets-js

A NodeJS library for the OpenSecrets.org API

### Installation
`npm install opensecrets-js`

### API key
The library looks for your API credentials in the file 'key.JSON', which is expected to have the format
`{ "apiKey": "XXX"}`

### Methods/Usage
To use the library, you must include it:
`var OpenSecrets = require('opensecrets-js');`

The following methods are currently available, note that all callbacks are of the form: `function(error, results)`
#### Members
`OpenSecrets.getLegislators(stateID, callback)`
- `stateID`: the standard two letter state abbreviation of a state, e.g. ME for Maine
- `Callback`: the callback function

`OpenSecrets.memPFDprofile(year, cid, callback)`
- `year`: The year of the election
- `cid`: The representative's cid number
- `Callback`: the callback function

#### Candidates
`OpenSecrets.candSummary(stateID, callback)`
- `stateID`: the standard two letter state abbreviation of a state, e.g. ME for Maine
- `Callback`: the callback function

`OpenSecrets.candContrib(cid, cycle, callback)`
- `cid`: The candidate's cid
- `cycle`: The year of the race
- `Callback`: the callback function

`OpenSecrets.candIndustry(cid, cycle, callback)`
- `cid`: The candidate's cid
- `cycle`: The year of the race
- `Callback`: the callback function

`OpenSecrets.candIndByInd(cid, cycle, ind, callback)`
- `cid`: The candidate's cid
- `cycle`: The year of the race
- `ind`: A three character industry code
- `Callback`: the callback function

`OpenSecrets.candSectory(cid, cycle, callback)`
- `cid`: The candidate's cid
- `cycle`: The year of the race
- `Callback`: the callback function

#### Congressional Committees
`OpenSecrets.conCmteIndus(cmte, congno, indus, callback)`
- `cmte`: Committee ID in CQ format
- `congno`: 112 (for 2012), 113 (for 2014)
- `indus`: Industry code
- `Callback`: the callback function

#### Organizations
`OpenSecrets.getOrgs(org, callback)`
- `org`: Name or partial name of organization requested
- `Callback`: the callback function

`OpenSecrets.orgSummary(id, callback)`
- `id`: CRP orgid
- `Callback`: the callback function
