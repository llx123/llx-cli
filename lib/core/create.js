const { creatProjectAction, addComponent } = require('./actions')


const createCommands = (program) => {
  program
    .command('create <project>')
    .description('momo create demo1')
    .action(creatProjectAction)

  program
    .command('add <name>')
    .description('momo add template')
    .action(addComponent)
}

module.exports = createCommands