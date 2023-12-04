const config = require('./webpack.base.config')
const path   = require('path')
const target = 'es2020'

config.output.path = path.join(config.output.path, target)

config.target.push(target)

config.module.rules[0].use.options.presets = [
  [config.module.rules[0].use.options.presets[0], {targets: 'defaults'}]
]

module.exports = config
