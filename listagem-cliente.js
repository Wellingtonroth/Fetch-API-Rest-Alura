const removeCliente = id => {
  if(confirm("Deletar o cliente?"))
  deletaCliente(id)
}

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement("tr");

  const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger"
    onclick="removeCliente(${id})">Excluir</button>
  `;
      
  //o innerHTML  a inserindo uma linha para cada conteudo
  linha.innerHTML = conteudoLinha;

  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then(clientes => {
  clientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
  });
});
