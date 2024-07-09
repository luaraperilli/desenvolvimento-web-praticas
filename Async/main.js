// Promise
// Faz a busca e salva a promessa
// const res = fetch("https://swapi.dev/api/people");

// Operador .then
// Duas Promises concatenadas
// res.then((resposta) => {
//     console.log("Promise deu ok!");
//     const dadosJson = resposta.json();
//     dadosJson.then((resultado) => {
//         console.log("Promise 2 deu ok!");
//         console.log(resultado);
//         console.log(resultado.results[0].name)  // Primeiro nome da sequência
//     })
//     console.log("Final do primeiro then")
// });

// Os próximos blocos são equivalentes mas o segundo possui melhor visualização
// res.then((resposta) => {
//         return resposta.json();
//     })
//     .then((resultado) => {
//         console.log(resultado);
//         console.log(resultado.results[0].name)
//     })
// console.log("Final do arquivo!")
async function buscaStarWars(){
    const res = await fetch("https://swapi.dev/api/people");
    const dados = await res.json(); // É preciso converter para Json porque os dados estão em formato binário
    console.log(dados.results[0].name)
}
console.log("Antes do busca Star Wars!")
buscaStarWars()
console.log("Depois do busca Star Wars!")