const erroElement = document.getElementById('erro')
erroElement.innerHTML = ""

async function buscaCEP(cep) {

    try {

        var consultaViaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaViaCepJson = await consultaViaCep.json();

        if (consultaViaCepJson.erro == true) {
            throw Error("Cep não existente!")
        }
        erroElement.setAttribute('hidden', 'hidden')
        console.log(consultaViaCepJson)
        return consultaViaCepJson
    } catch (erro) {
        erroElement.removeAttribute('hidden')
        console.log(erro)
        erroElement.innerHTML = "CEP inválido. Tente novamente!"
    }
}

//buscaCEP(52050020)
//buscaCEP(52050020).then(reposta => console.log(reposta))
let flag = 0
const cepElement = document.getElementById('cep')
cepElement.addEventListener('input', () => {
    if (cepElement.value.length === 8) {
        a(); // Chame a sua função aqui quando 8 dígitos forem digitados
    }

})

function a() {
    buscaCEP(cepElement.value).then(resposta => {
        inputComplete('endereco', resposta, 'logradouro')
        inputComplete('bairro', resposta, 'bairro')
        inputComplete('cidade', resposta, 'localidade')
        inputComplete('estado', resposta, 'uf')

        const complemento = document.getElementById('complemento').removeAttribute('disabled')
        const numero = document.getElementById('numero')
        numero.removeAttribute('disabled')
        if (flag == 0) {
            numero.focus()
        }
        flag++

    })
}
function inputComplete(id, reposta, valor) {
    const campo = document.getElementById(id)
    campo.value = reposta[valor]
}

// var consultaViaCep = fetch("https://viacep.com.br/ws/52050020/json/")
//     .then((response) => {
//         response.json()
//     })
//     .then((jsonResponse) => {
//         if (jsonResponse.erro) {
//             throw Error("Esse CEP não existe!")
//         }
//         console.log(jsonResponse)
//     })
//     .catch((erro) => {
//         console.log("CEP em formato inválido!")
//     })
//     .finally((mensagem) => {
//         console.log("Processamento concluído")
//     })

const check = document.getElementById('check')
check.addEventListener('click', (e) => {
    if (e.target.checked) {
        erroElement.setAttribute('hidden', 'hidden')

        ativaCampo('endereco')
        ativaCampo('numero')
        ativaCampo('complemento')
        ativaCampo('bairro')
        ativaCampo('cidade')
        ativaCampo('estado')

        desativaCampo('cep')
        document.getElementById('cep').value = ""
    }
    else {
        desativaCampo('endereco')
        desativaCampo('bairro')
        desativaCampo('cidade')
        desativaCampo('estado')

        ativaCampo('cep')
    }

})

function ativaCampo(id) {
    document.getElementById(id).removeAttribute('disabled')
    document.getElementById(id).value = ""
}

function desativaCampo(id) {
    document.getElementById(id).setAttribute('disabled', 'disabled')
}



