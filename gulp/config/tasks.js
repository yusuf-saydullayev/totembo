const fs = require('fs'),
      path = './gulp/tasks',
      pathFiles = fs.readdirSync(path).map(adress => adress = path + '/' + adress);
      module.exports = pathFiles