export const OPERACAO_INVALIDA = 'OPERACAO_INVALIDA'

export const calculadora = (operacao, valores) => {
  switch (operacao) {
    case 'soma':
      let soma = valores[0]
      for (let index = 1; index < valores.length; index++) {
        soma += valores[i]
        
      }
      return soma;
    
    case 'subtracao':
      let subtracao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        subtracao -= valores[i]
        
      }
      return subtracao;

    case 'multiplicacao':
      let multiplicacao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        multiplicacao *= valores[i]
        
      }
      return multiplicacao;

    case 'divisao':
      let divisao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        divisao /= valores[i]
        
      }
      return divisao;

    default:
      return OPERACAO_INVALIDA;
  }
}
