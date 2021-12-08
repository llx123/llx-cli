const ejs = require("ejs");
const path = require("path");

const compile = (fileName, data) => {
  const templatePath = path.resolve(__dirname, `../templates/${fileName}`);

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  compile,
};
