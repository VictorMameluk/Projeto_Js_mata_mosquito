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
	//Incluir um decremento de -90px para forçar a img "mosquito.png" ser randômica dentro do viewport com limite de 90px para não ultrapassar e a img ficar do "lado de fora" 

	var positionX = Math.floor(Math.random() * lar) - 90
	var positionY = Math.floor(Math.random() * alt) - 90

	// Usado para debug / se posiçao < 0 recebe 0 senão recebe ela mesmo
	//Fiz esse controle pelo fato de ter colocado -90px e as vezes gerado número negativo fazendo com que a img "mosquito.png" saisse do viewport
	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

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


