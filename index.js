const ul = document.querySelector('[data-js="data"]');
const filterInput = document.querySelector('#filter');

const getPosts = async () =>{
 const response = await fetch(`http://localhost/desenvolvimento%20de%20servidores/aula5/new/alunos.php/alunos`);
 return response.json();
}

const cardAlunos = alunos => alunos.map( card => `
<li>
<h3>${card.nome}</h3>
<p>${card.email}</p>
<p>${card.telefone}</p>
<p>${card.ra}</p>
</li>
`).join('')

const cargaDados = async () => {
    const data = await getPosts();
    const postTemplate = cardAlunos(data);
    ul.innerHTML = postTemplate;
}

cargaDados();
