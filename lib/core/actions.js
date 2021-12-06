const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

const { vueRepo } = require('../config/repo-config');

const { commandSpawn } = require('../utils/terminal')

const creatProjectAction = async (project) => {
  // download
  await download(vueRepo, project, { clone: true }, function (err) {
    console.log(err ? 'Error' : 'Success', err)
    // commandSpawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], { cwd: `./${project}` })
  })
  // npm install
  console.log(666)
}


module.exports = {
  creatProjectAction
}