let campoDescricao = document.getElementById("descricao")
let campoValor = document.getElementById("valor")
let campoData = document.getElementById("data")
let campoTipo = document.getElementById("tipo")
let botaoSalvar = document.getElementById("salvar")

let tabela = document.getElementById("tabela")



botaoSalvar.addEventListener('click', () => {
  
  let descricao = campoDescricao.value;
  let valor = campoValor.value
  let data = campoData.value
  let tipo = campoTipo.value

  let novaLinha = tabela.insertRow()
  novaLinha.insertCell().appendChild(document.createTextNode(descricao));
  novaLinha.insertCell().appendChild(document.createTextNode(valor))
  novaLinha.insertCell().appendChild(document.createTextNode(data))
  novaLinha.insertCell().appendChild(document.createTextNode(tipo))
})