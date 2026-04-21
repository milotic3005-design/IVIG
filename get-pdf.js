const fs = require('fs');
fetch('https://www.gammagard.com/content/dam/takeda/imported/gammagard/pdfs/hcp-infusion-rate-table.pdf')
  .then(r => r.arrayBuffer())
  .then(b => {
    fs.writeFileSync('temp.pdf', Buffer.from(b));
    console.log('Saved');
  });
