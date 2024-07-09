// Pega as referências
const btnBuscaP = document.querySelector('#btn-pessoas');
const listaPessoas = document.querySelector('#lista-pessoas');

// Async declara que a função é assíncrona
// Await espera a conclusãp de uma Promise
btnBuscaP.addEventListener('click', async () => {
    // Ação quando o botão for pressionado
    const resultado = await fetch("https://swapi.dev/api/people");
    const dadosJson = await resultado.json();

    for (let pessoa of dadosJson.results){
        const li = document.createElement("li");
        li.innerText = pessoa.name;
        listaPessoas.append(li);
    }
})