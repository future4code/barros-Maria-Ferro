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

// ÍNICIO FUNÇÃO RODAR JOGO

function rodarJogo() {

   let cartasUsuario = []
   let cartasComputador = []

   cartasUsuario.push(comprarCarta())
   cartasUsuario.push(comprarCarta())

      if(cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) {
         cartasUsuario[0] = comprarCarta()
         cartasUsuario[1] = comprarCarta()
      }

   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())

      if(cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
         cartasComputador[0] = comprarCarta()
         cartasComputador[1] = comprarCarta()
      }

      let pontosUsuario = 0
      let textoCartasUsuario = ""


      let pontosComputador = 0
      for (let carta of cartasComputador) {
         pontosComputador = pontosComputador + carta.valor
      }
   
      let textoCartasComputador = ""
      for (let carta of cartasComputador) {
         textoCartasComputador = textoCartasComputador + carta.texto + " "
      }
   
      let resultadoFinal = ""



   let comprar = true

      while (comprar) {
         for (let carta of cartasUsuario) {
            textoCartasUsuario = textoCartasUsuario + carta.texto + " "
            pontosUsuario = pontosUsuario + carta.valor
         }
         if (pontosUsuario > 21) {
         comprar = false
         } else if(confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada pelo computador é ${cartasComputador[0].texto}.
Deseja comprar mais uma carta?`)) {
         cartasUsuario.push(comprarCarta())
         }}
     
         // if (pontosUsuario <= 21) {
         // cartasComputador.push(comprarCarta())
         // }    

      if (pontosUsuario > 21) {
         resultadoFinal = "O computador ganhou!"
      } else if (pontosComputador > 21 && pontosUsuario < 21) {
         resultadoFinal = "O usuário ganhou!"
      } else if (pontosUsuario > pontosComputador) {
       resultadoFinal = "O usuário ganhou!"
      } else if (pontosUsuario < pontosComputador) {
       resultadoFinal = "O computador ganhou!"
      } else if (pontosUsuario === pontosComputador) {
         resultadoFinal = "Empate!"
      }

      alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${pontosUsuario}.
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontosComputador}.
${resultadoFinal}`)}

//       while(pontosUsuario < 21) {
//          for (let carta of cartasUsuario) {
//             textoCartasUsuario = textoCartasUsuario + carta.texto
//             pontosUsuario = pontosUsuario + carta.valor
//          }

//          if(confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada pelo computador é ${cartasComputador[0].texto}.
// Deseja comprar mais uma carta?`)) {
//             cartasUsuario.push(comprarCarta())
//             } else {

//             }
//          }
         
//          console.log(cartasUsuario)

//          alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${pontosUsuario}.
// As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontosComputador}.
// ${resultadoFinal}`)

         // INÍCIO DA PARTE QUE APARECE NA TELA

//    if(confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada pelo computador é ${cartasComputador[0].texto}.
// Deseja comprar mais uma carta?`)) {
//       while (pontosComputador <= 21) {
//       tirarCartasUsuario()
//       confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada pelo computador é ${cartasComputador[0].texto}.
// Deseja comprar mais uma carta?`) }//ainda não sei como continuar tirando carta e quando parar 
// } else {
//       alert(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${pontosUsuario}.
// As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${pontosComputador}.
// ${resultadoFinal}`) // também preciso ver direitinho as condições para o fim do jogo
// }
      // FIM DA PARTE QUE APARECE NA TELA
      


// FIM DA FUNÇÃO RODAR JOGO

if(confirm("Boas vindas ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?")) {
   rodarJogo()
} else {
   alert("O jogo acabou.") }
