const fs = require('fs');
const path = require('path');

const files = [
  'SupportAccountPage.tsx',
  'SupportPostingPage.tsx',
  'SupportLivePage.tsx',
  'SupportMonetizationPage.tsx',
  'SupportPrivacySafetyPage.tsx',
  'SupportOtherPage.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, 'src/components', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove Page Header
  content = content.replace(/\{\/\* Page Header \*\/\}\s*<div className="mb-10">\s*<h1 className="text-\[24px\] font-bold text-\[var\(--text-main\)\] mb-2">.*?<\/h1>\s*<p className="text-\[15px\] text-\[var\(--text-secondary\)\]">.*?<\/p>\s*<\/div>/s, '');
  
  // Update Sections styling and links
  content = content.replace(/<div className="space-y-10">/g, '<div className="space-y-12">');
  content = content.replace(/<h2 className="text-\[18px\] font-bold text-\[var\(--text-main\)\] mb-5">/g, '<h2 className="text-[20px] font-bold text-[var(--text-main)] mb-6">');
  content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">/g, '<div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-20">');
  
  // Replace div links with Link to="/support/article"
  content = content.replace(/<div\s*key=\{linkIndex\}\s*className="text-\[14px\] text-\[var\(--text-main\)\] hover:underline cursor-pointer"\s*>\s*\{link\}\s*<\/div>/gs, '<Link \n                          key={linkIndex} \n                          to="/support/article"\n                          className="text-[15px] text-[var(--text-main)] hover:underline cursor-pointer block"\n                        >\n                          {link}\n                        </Link>');
  
  // Ensure Link is imported if not already
  if (!content.includes('import { Link }') && !content.includes('import { useNavigate, Link }')) {
    content = content.replace("import { useNavigate } from 'react-router-dom';", "import { useNavigate, Link } from 'react-router-dom';");
  }

  fs.writeFileSync(filePath, content);
});
console.log('Done formatting pages');
