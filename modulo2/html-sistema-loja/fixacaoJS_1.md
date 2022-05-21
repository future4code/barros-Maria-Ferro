Exercícios de Fixação de Javascript - Treino 1

```javascript

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioFixo = 2000
    const comissao = (100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05)
    const salarioTotal = salarioFixo + comissao
 
    return salarioTotal
}```