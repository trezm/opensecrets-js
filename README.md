# opensecrets-js

A NodeJS library for the OpenSecrets.org API

### Installation
`npm install opensecrets-js`

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
