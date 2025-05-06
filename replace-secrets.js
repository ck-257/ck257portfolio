const fs = require('fs');
const path = require('path');

// Read the HTML file
const filePath = path.join(__dirname, 'index.html'); // or whatever your HTML file path is
let content = fs.readFileSync(filePath, 'utf8');

// Replace the placeholder with the environment variable
content = content.replace(
  '"__EMAILJS_PUBLIC_KEY__"', 
  `"${process.env.EMAILJS_PUBLIC_KEY}"`
);

// Write the file back
fs.writeFileSync(filePath, content);

console.log('📝 Secrets injected into HTML!');
