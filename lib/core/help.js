const selfOptions = (program) => {
  program.option('-d, --d', 'description')
  program.on('--help', function() {
    console.log("");
    console.log("    --others");
  })
}

module.exports = selfOptions