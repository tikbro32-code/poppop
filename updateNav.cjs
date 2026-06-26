const fs = require('fs');
const file = 'src/components/NewUserGuidePage.tsx';
let content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('<nav');
const endIndex = content.indexOf('</nav>') + 6;

if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + '<SafetyNav />' + content.slice(endIndex);
  
  // also add the import
  content = content.replace("import Logo from './Logo';", "import Logo from './Logo';\nimport SafetyNav from './SafetyNav';");
  
  fs.writeFileSync(file, content);
  console.log("Updated NewUserGuidePage.tsx");
} else {
  console.log("Could not find <nav> tags");
}
