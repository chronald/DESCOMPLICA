// comando de interação obrigatório
const readline = require ('readline-sync');

// Primeiro conteudo utilizando readline.question
const nome = readline.question('Digite seu nome: ');

// Segundo conteudo utilizando readline.question
const sobrenome = readline.question('Digite seu sobrenome: ');

//Armazenar os conteudos anteriores.
const nomeCompleto = `${nome} ${sobrenome}`;

// Console 
console.log('Seu nome é:', nomeCompleto)


// Executar com node (nome do arquivo exemplo node pratica1.js)