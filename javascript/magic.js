const { writeFileSync } = require('fs')

try {
  writeFileSync('./dist/module/package.json', '{ "type": "module" }')
} catch {}
