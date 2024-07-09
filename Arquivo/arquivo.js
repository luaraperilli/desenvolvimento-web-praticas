// Importa o módulo fs do Node
const fs = require('fs');
const path = require('path');

const NomeDir = 'Arquivo'; // Nome do diretório

try {
    if (!fs.existsSync(NomeDir)) {
        fs.mkdirSync(NomeDir); // Cria o diretório se não existir
        console.log(`Diretório ${NomeDir} criado com sucesso`);
    } else {
        console.log(`Diretório ${NomeDir} já existe`);
    }

    const caminho = path.join(NomeDir, 'index.html'); // Caminho completo para o arquivo dentro do diretório
    fs.writeFileSync(caminho, '<h1>Eu sou um H1</h1>'); // Cria o arquivo dentro do diretório
    console.log(`Arquivo ${caminho} criado com sucesso`);

} catch (error) {
    console.error('Ocorreu um erro:', error);
}

// Cria um diretório
// fs.mkdirSync('NomeArquivo')
// Apaga um diretório
// rm -rf NomeArquivo/