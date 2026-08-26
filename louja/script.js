function adicionar1(){
    let campo = document.getElementById("campCar")
    let produto = document.createElement("li")
    produto.textContent="1 - Sertão Torra Clara"
    campo.appendChild(produto)
    let noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti.style.position="sticky"
    noti.style.padding="20px"
    noti.style.width="200px"
    noti.style.height="70px"
    noti.style.borderRadius="10px"
    noti.style.margin="auto"
    noti.style.display="block"
    noti.style.top="0"
    noti.style.textAlign="center"
    setTimeout(() =>{
        noti.textContent=""
        noti.style.padding="0px";
        noti.style.width="0px";
    }, 1000)
}
function adicionar2(){
    let campo = document.getElementById("campCar")
    let produto = document.createElement("li")
    produto.textContent="1 - Boa Vista Torra Média"
    campo.appendChild(produto)
    let noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti.style.position="sticky"
    noti.style.padding="20px"
    noti.style.width="200px"
    noti.style.height="70px"
    noti.style.borderRadius="10px"
    noti.style.margin="auto"
    noti.style.display="block"
    noti.style.top="0"
    noti.style.textAlign="center"
    setTimeout(() =>{
        noti.textContent=""
        noti.style.padding="0px";
        noti.style.width="0px";
    }, 1000)
}
function adicionar3(){
    let campo = document.getElementById("campCar")
    let produto = document.createElement("li")
    produto.textContent="1 - Água Limpa Torra Clara"
    campo.appendChild(produto)
    let noti= document.getElementById("not")
    noti.textContent="adicionado ao carrinho"
    noti.style.position="sticky"
    noti.style.padding="20px"
    noti.style.width="200px"
    noti.style.height="70px"
    noti.style.borderRadius="10px"
    noti.style.margin="auto"
    noti.style.display="block"
    noti.style.top="0"
    noti.style.textAlign="center"
    setTimeout(() =>{
        noti.textContent=""
        noti.style.padding="0px";
        noti.style.width="0px";
    }, 1000)
}
function descer(){
    window.scrollTo({
        top:1100,
        behavior: 'smooth'
    }
    )
}
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting===true){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))