export const OPERACAO_INVALIDA = 'OPERACAO_INVALIDA'

export const calculadora = (operacao, valores) => {
  switch (operacao) {
    case 'soma':
      soma = valores[0]
      for (let index = 1; index < valores.length; index++) {
        soma += valores[i]
        
      }
      return soma;
    
    case 'subtracao':
      subtracao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        subtracao -= valores[i]
        
      }
      return subtracao;

    case 'multiplicacao':
      multiplicacao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        multiplicacao *= valores[i]
        
      }
      return multiplicacao;

    case 'divisao':
      divisao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        divisao /= valores[i]
        
      }
      return divisao;

    default:
      return OPERACAO_INVALIDA;
  }
}
