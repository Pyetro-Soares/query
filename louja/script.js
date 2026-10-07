let notificacao = document.getElementById('notificacao')
notificacao.textContent=''
function adicionarAoCarrinho(){
          notificacao.textContent ='Adicionado ao carrinho'
    setTimeout(function(){
        notificacao.textContent=''} , 2000
    );
}
let listaDeProduto = []