// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)
// Executar uma acao
function cloneField() {
	// Duplicar os campos. Que campos?
	const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
	// limpar os campos. Que campos?
	const fields = newFieldContainer.querySelectorAll('input')

	fields.forEach(function(field) {
		// pega o field do momento e limpa ele
		field.value = ""
	})
	// Colocar na pagina. Onde?
	document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
