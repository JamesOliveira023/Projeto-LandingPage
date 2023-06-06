var setaDireita = window.document.GetElementById("seta-direita")
var Leonardo = window.document.GetElementById("Leonardo")
var Samanta = window.document.GetElementById("Samanta")
var Bruna = window.document.GetElementById("Bruna")
var setaEsquerda = window.document.GetElementById("seta-esquerda")

function RolarParaDireita() {
Leonardo.style = "display:flex"
Bruna.style = "display:none"
setaDireita.style = "display:none;"
setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
Leonardo.style = "display: flex"
Bruna.style = "display: none"
setaDireita.style = "display:none"
setaEsquerda.style = "display:flex; margin-top:55px"

}

