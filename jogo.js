
//Usei o evento window.inner para saber o tamanho do viewport(janela de exibição)
//Vamos usar img "mosquito" de forma randômica e dessa forma a img só aparecerá na tela do browser nos eixos (x e y)
var alt = 0
var lar = 0
var vidas = 1
var tempo = 15
var tempoMosquito = 1500



// O search recupera nossa Query string (tudo que esta a direita na url após a interrogação, inclusive ela)
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal'){
	//1500
	tempoMosquito = 1500
} else if( nivel === 'Difícil'){
	//1000
	tempoMosquito = 1000
} else if(nivel === 'Chucknorris'){
	//750
	tempoMosquito = 750
}



function ajustaTamanhoTela(){
	lar = window.innerWidth
	alt = window.innerHeight
	 

	console.log(lar, alt)
}

ajustaTamanhoTela()

// *************** Cronometrar o tempo ***************

var cronometro = setInterval(function(){

	tempo -= 1

	if (tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function positionRandom (){

	//Remover o mosquito anterior (caso exista)

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas > 3){
			window.location.href = "gameover.html"
		}else{
		document.getElementById('v' + vidas).src = "assets/coracao_vazio.png"

		vidas++
		}
	}

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
	mosquito.className = tamanhoAleatorioMosquito() + ' ' + ladoAleatorio()
	mosquito.style.left = positionX + 'px'
	mosquito.style.top = positionY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	//Aqui eu acesso o body e adiciono um filho "appendChild"
	document.body.appendChild(mosquito)

	//Console.log só deixei para estudos
	console.log(tamanhoAleatorioMosquito())

	console.log(ladoAleatorio())

}


//Fazer o mosquito aparecer aleatoriamente no viewport

function tamanhoAleatorioMosquito(){
	var classe = Math.floor(Math.random() * 3)
		
		switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2: 
			return 'mosquito3'
		}

}

// Virar o mosquito ao contrário

function ladoAleatorio(){
	var classe = Math.floor(Math.random() *2)

		switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		}
}




