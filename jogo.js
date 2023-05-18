//Usei o evento window.inner para saber o tamanho do viewport(janela de exibição)
//Vamos usar img "mosquito" de forma randômica e dessa forma a img só aparecerá na tela do browser nos eixos (x e y)
var alt = 0
var lar = 0

function ajustaTamanhoTela(){
	lar = window.innerWidth
	alt = window.innerHeight
	 

	console.log(lar, alt)
}

ajustaTamanhoTela()


function positionRandom (){
	//Aqui estou usando o objeto Math.random para gerar números aleátorios dentro do viewport.
	//Depois encapsulei dentro do Math.floor para arrendondar para baixo os números decimais gerados.

	var positionX = Math.floor(Math.random() * lar)
	var positionY = Math.floor(Math.random() * alt)

	console.log(positionX, positionY)

	//Criando o elemento HTML - Manipulando a DOM

	//Aqui atribuir a var mosquito para poder chamar ela no "appendChild"
	//Aqui o atributo src tem que ser declarado de acordo com a tag criada para manipular a img
	//className seria para acessar o style.css

	var mosquito = document.createElement('img')	
	mosquito.src = 'assets/mosquito.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = positionX + 'px'
	mosquito.style.top = positionY + 'px'
	mosquito.style.position = 'absolute'

	//Aqui eu acesso o body e adiciono um filho "appendChild"
	document.body.appendChild(mosquito)


}


