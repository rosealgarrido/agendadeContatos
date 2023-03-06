const form = document.getElementById('form-agenda')
const nomes = []
const contatos = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault ()

    adicionaLinha()
    atualizaAgenda()
})
function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nomeAgenda')
    const inputContatoAgenda = document.getElementById('contatoAgenda')

    if (nomes.includes(inputNomeAgenda.value)) {
        alert(`O contato: ${inputNomeAgenda.value} já foi inserido`)
    } else {
        nomes.push(inputNomeAgenda.value)
        contatos.push(parseFloat(inputContatoAgenda.value))
    
    let linha = '<tr>'
    linha += `<td>${inputNomeAgenda.value}</td>`
    linha += `<td>${inputContatoAgenda.value}</td>`
    linha += '</tr>'

    linhas += linha

    inputNomeAgenda.value = ''
    inputContatoAgenda.value = ''
}}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas
}