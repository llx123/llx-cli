const { promisify } = require('util');
const open = require('open');

const download = promisify(require('download-git-repo'));

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { compile } = require('../utils/compile');

const creatProjectAction = async (project) => {
  // download
  console.log('------start------')
  await download(vueRepo, project, { clone: true }, function(err) {
    console.log(typeof err)
    console.log(JSON.stringify(err))
  })
  // npm install
  let commond = process.platform === "win32" ? "npm.cmd" : "npm"
  await commandSpawn(commond, ['install'], { cwd: `./${project}` })
  // npm  run serve
  commandSpawn(commond, ['run', 'serve'], { cwd: `./${project}` })
  // open   webpack-dev-server
  // open('http://localhost:8080')
}

const addComponent = async (name) => {
  const result = await compile('component.ejs', { name });

  console.log(result);
}

module.exports = {
  creatProjectAction,
  addComponent
}