
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./some-chain-sdk.cjs.production.min.js')
} else {
  module.exports = require('./some-chain-sdk.cjs.development.js')
}
