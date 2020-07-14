let username = document.getElementById('username')
let password = document.getElementById('password')


let armz = [
    {nome: 'Bruno', senha: 'senha123'},
    {nome: 'João', senha: '1234'},
    {nome: 'Caio', senha: 'senha'}
]


function validacao() {
    for (i=0; i<armz.length; i++){
        if (armz[i].nome == username.value && armz[i].senha == password.value){
            window.alert('Login efetuado com sucesso!')
            
        }
        else if (armz[i].nome == username.value && armz[i].senha != password.value){
            window.alert('Senha incorreta!')            
            username.value = null
            password.value = null
        }
        else if (armz[i].nome != username.value && armz[i].senha == password.value){
            window.alert('Nome de usuário incorreto!')
            username.value = null
            password.value = null
            
        }
        
        else{
            continue;
        }
    }
}

