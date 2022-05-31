Exercícios de Fixação de Javascript - Treino 4

```javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let quantidade = 0
  for (let numero of arrayDeNumeros) {
    if (numero === numeroEscolhido) {
      quantidade++
    } 
  }
  
  if (quantidade > 0) {
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
  } else {
    return `Número não encontrado`
  }
  
}

```