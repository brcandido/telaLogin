let username = document.getElementById('username')
let password = document.getElementById('password')


let armz = [
    {nome: 'Bruno', senha: 'senha123'},
    {nome: 'João', senha: '1234'},
    {nome: 'Caio', senha: 'senha'}
]


function validacao() {
    let flagLogin = 1    
    if (username.value == '' || password.value == ''){
        window.alert('Preencha todas as informações')        
    }
    else{    
        for (i=0; i<armz.length; i++){            
            if (armz[i].nome == username.value) {
                flagLogin = 0
                if (armz[i].senha == password.value){
                    window.alert('Login efetuado com sucesso!')                
                }
                else{
                    window.alert('Senha incorreta!')                
                }
                
            }        
        }        
        if (flagLogin){
            window.alert('Usuário incorreto!')
        }
    }    
}