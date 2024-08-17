const config = require('./webpack.base.config')
const path   = require('path')
const target = 'es5'

config.output.path = path.join(config.output.path, target)

config.target.push(target)

module.exports = config
