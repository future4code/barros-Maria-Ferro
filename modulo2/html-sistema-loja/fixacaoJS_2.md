Exercícios de Fixação de Javascript - Treino 2

```javascript

function calculaPrecoTotal(quantidade) {
    let custoTotal = 0
    if(quantidade < 12) {
    custoTotal = quantidade * 1.3
    } else {
    custoTotal = quantidade
    }

    return custoTotal
}

```