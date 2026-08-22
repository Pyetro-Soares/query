function adicionar1(){
    let campo = document.getElementById("campCar")
    let produto = document.createElement("li")
    produto.textContent="1 - Sertão Torra Clara"
    campo.appendChild(produto)
    let noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti.style.position="fixed"
    noti.style.padding="30px"
    noti.style.width="99vw"
    setTimeout(() =>{
        noti.textContent=""
        noti.style.padding="0px";
        noti.style.width="0px";
    }, 3000)
}
function adicionar2(){
    let campo = document.getElementById("campCar")
    let produto = document.createElement("li")
    produto.textContent="1 - Boa Vista Torra Média"
    campo.appendChild(produto)
    let noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti.style.position="fixed"
    noti.style.padding="30px"
    noti.style.width="99vw"
    setTimeout(() =>{
        noti.textContent=""
        noti.style.padding="0px";
        noti.style.width="0px";
    }, 3000)
}
function adicionar3(){
    let campo = document.getElementById("campCar")
    let produto = document.createElement("li")
    produto.textContent="1 - Água Limpa Torra Clara"
    campo.appendChild(produto)
    let noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti.style.position="fixed"
    noti.style.padding="30px"
    noti.style.width="99vw"
    setTimeout(() =>{
        noti.textContent=""
        noti.style.padding="0px";
        noti.style.width="0px";
    }, 3000)
}
function descer(){
    window.scrollTo({
        top:900,
        behavior: 'smooth'
    }
    )
}