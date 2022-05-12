/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

function rodarJogo() {

   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta3 = comprarCarta()
   const carta4 = comprarCarta()

   const resultadoUsuario =  carta1.valor + carta2.valor
   const resultadoComputador = carta3.valor + carta4.valor

   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - Pontuação: ${resultadoUsuario}
Computador - cartas: ${carta3.texto} ${carta4.texto} - Pontuação: ${resultadoComputador}`)

   if(resultadoUsuario === resultadoComputador) {
      console.log("Empate!")
   } else if(resultadoUsuario > resultadoComputador) {
      console.log("O usuário ganhou!")
   } else {
      console.log("O computador ganhou!")
   }
}

if(confirm("Quer iniciar uma nova rodada?")) {
   rodarJogo()
} else {
   console.log("O jogo acabou.")
}