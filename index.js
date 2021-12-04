#!/usr/bin/env node
const selfOption = require('./lib/core/help')
const createCommand = require('./lib/core/create')


const program = require('commander');

program.version(require('./package.json').version);

// option
selfOption(program)

// command
createCommand(program)

program.parse(process.argv);