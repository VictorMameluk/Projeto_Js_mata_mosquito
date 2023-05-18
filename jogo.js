//Usei o evento window.inner para saber o tamanho do viewport(janela de exibição)
//Vamos usar img de forma randômica e dessa forma a img só aparecera na tela do browser independemente do tamanho
var alt = 0
var lar = 0

function ajustaTamanhoTela(){
	 alt = window.innerHeight
	 lar = window.innerWidth

	 console.log(alt, lar)
}

ajustaTamanhoTela()
