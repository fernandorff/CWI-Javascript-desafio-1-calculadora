export const OPERACAO_INVALIDA = 'OPERACAO_INVALIDA'

export const calculadora = (operacao, valores) => {
  
  switch (operacao) {
    case 'soma':
      let soma = valores[0]
      for (let index = 1; index < valores.length; index++) {
        soma += valores[index]
        
      }
      return soma;
      
    
    case 'subtracao':
      let subtracao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        subtracao -= valores[index]
        
      }
      return subtracao;

    case 'multiplicacao':
      let multiplicacao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        multiplicacao *= valores[index]
        
      }
      return multiplicacao;

    case 'divisao':
      let divisao = valores[0]
      for (let index = 1; index < valores.length; index++) {
        divisao /= valores[index]
        
      }
      return divisao;

    default:
      return OPERACAO_INVALIDA;
  }

}
