function gerarNumero(){
    return Math.floor(Math.random() * 10)
}


function gerarDigitos(){
    let cpf = ""
    for(let i=1; i<=9; i++){
        cpf += gerarNumero()
    }
    return cpf
}

function validarDigitoVerificador(digitos){
    let cpf = digitos
    let somaDigitos = 0
    let resto = 0
    let contador = digitos.length <= 9 ? 10 : 11
    
    for(let i=0; i<cpf.length; i++){
        somaDigitos += digitos[i] * contador
        contador--
    }
    
    resto = somaDigitos % 11
    resto = 11 - resto

    return resto >= 10 ? 0 : resto
}

function formatarCpf(cpf){
    let cpfFormatado=""
    for(let i=0; i<cpf.length; i++){
        cpfFormatado += cpf[i]
        if((i===2) || (i===5)){
            cpfFormatado += "."        
        }
        if(i===8){
            cpfFormatado += "-"
        }
    }
    return cpfFormatado
}

function gerarCpf(){
    let cpf = gerarDigitos() 
    let cpfComPrimeiroDigito = "" 
    let cpfComSegundoDigito = ""
    cpfComPrimeiroDigito = cpf + validarDigitoVerificador(cpf)
    cpfComSegundoDigito = cpfComPrimeiroDigito + validarDigitoVerificador(cpfComPrimeiroDigito)
    document.forms["form"].cpf.value = formatarCpf(cpfComSegundoDigito)
}


function copiarCpf(){
    let cpf = document.forms["form"].cpf.value
    if(cpf){
        navigator.clipboard.writeText(document.forms["form"].cpf.value).then(
            () => {
                window.alert('Cpf copiado!')
            },
            () => {
                window.alert('Erro ao copiar Cpf!')
            }
        )
    }
}

