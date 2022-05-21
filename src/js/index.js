var inputElement = document.querySelector('#cep')


function buscarendereco(){
    axios.get(`https://viacep.com.br/ws/${inputElement.value}/json/`)
.then(res =>{
    document.getElementById('rua').value = res.data.logradouro
    document.getElementById('bairro').value = res.data.bairro
    document.getElementById('cidade').value = res.data.localidade
    document.getElementById('estado').value = res.data.uf
})
.catch(() => {
    alert(`O cep ${inputElement.value} não existe!`);
})
}