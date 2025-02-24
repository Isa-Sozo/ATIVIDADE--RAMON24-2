/*1- Verificador de CPF
Todo CPF tem 11 digitos.
Os dois últimos são digitos verificadores, calculados com base nos 9 primeiros.
O calculo dos digitos usa uma formula:
Para o primeiro digito:
Multiplique cada um dos 9 primeiros digitos por 10 a 2
Some o resultado total
divida por 11, considere apenas o resto da divisao
Se o resto da divisão for menor que 2, então o dígito é igual a 0 (Zero).
Se o resto da divisão for maior ou igual a 2, então o dígito verificador é igual a 11 menos o resto da divisão (11 - resto).
Para o segundo digito:
Faça o mesmo, porém multiplicando de 11 a 2*/


function verificarCPF (cpf){
    let cpfsodigitos = cpf.replaceAll('.',''). replaceAll('-','').split('')
    if (cpfsodigitos.length != 11){
        return 'CPF Inválido'
    }
    let soma = 0
    for (i=10; i>1; i--){
        soma += cpfsodigitos[10-i] * i
    }
    let resultado = soma%11
    if(resultado<2){
        if(cpfsodigitos[9]!=0){
            return 'CPF Inválido'
        }
    }else{
        if(cpfsodigitos[9] != 11-resultado){
            return 'CPF Inválido'
        }
    }
    return 'CPF Válido'

}
let cpf = '119.482.039-52'
console.log (verificarCPF(cpf))
