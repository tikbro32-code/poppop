const fs = require('fs');
const path = require('path');

function findFiles(dir, ext, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        findFiles(path.join(dir, file), ext, fileList);
      }
    } else if (file.endsWith(ext)) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

console.log(findFiles(__dirname, '.mp4'));
