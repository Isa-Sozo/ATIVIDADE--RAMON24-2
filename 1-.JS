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
function calculoloop(contador, cpfsodigitos){
    let soma = 0
    for (i=contador; i>1; i--){
        soma += cpfsodigitos[contador-i] * i
    }
    let resultado = soma%11

    if(
        (resultado<2 && cpfsodigitos[contador -1]!=0)
        || (resultado >= 2 && cpfsodigitos [contador - 1]!= 11 - resultado)
    ){
        return false
    }
    return true
}

function verificarCPF (cpf){
    let cpfsodigitos = cpf.replaceAll('.',''). replaceAll('-','').split('')
    if (cpfsodigitos.length != 11){
        return 'CPF Inválido'
    }
    let resposta = calculoloop(10, cpfsodigitos)
    if(!resposta){
        return 'CPF inválido'
    }
    let resposta2 = calculoloop(11, cpfsodigitos)
    if(!resposta2){
        return 'CPF inválido'
    }

    return 'CPF Válido'

}
let cpf = '119.482.039-52'
let cpf2 = '119.482.039-51'
console.log (verificarCPF(cpf))
console.log (verificarCPF(cpf2))
