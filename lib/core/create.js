const { creatProjectAction } = require('./actions')


const createCommands = (program) => {
  program
    .command('create <project>')
    .description('waiting...')
    .action(creatProjectAction)
}

module.exports = createCommands