// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs')

fs.readdir('c:', (err, files) => {
  files.forEach(file => {
    document.body.innerHTML += '<br/>' + file
  });
})
