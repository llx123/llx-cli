#!/usr/bin/env node
const selfOption = require('./lib/core/help')
const program = require('commander');

program.version(require('./package.json').version);

// option
selfOption(program)

program.parse(process.argv);