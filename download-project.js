const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Criar um arquivo ZIP com o projeto
const output = fs.createWriteStream('portfolio-project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Nível de compressão
});

output.on('close', function() {
  console.log('Projeto empacotado com sucesso!');
  console.log('Arquivo: portfolio-project.zip (' + archive.pointer() + ' bytes)');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Adicionar todos os arquivos do projeto, exceto node_modules e arquivos desnecessários
archive.glob('**/*', {
  cwd: '.',
  ignore: [
    'node_modules/**',
    '.git/**',
    'dist/**',
    '*.zip',
    'download-project.js',
    '.bolt/**',
    'package-lock.json'
  ]
});

archive.finalize();