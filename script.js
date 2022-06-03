// function precototal(){
//     let preço = 10.00;
//     let total = [];
//     let pos = 0;
//     do{
//         pos += 1;
//         total[pos] = document.getElementById("qt"+pos).value * preço;
//     } while (pos<4);
    
//     let soma = 0;
//     for(let i = 1; i < total.length; i++) {
//         soma += total[i];
//     }
//     sessionStorage.setItem("totalCart", soma)
//     window.location ="carrinho.html";
// }
// function somaind(){
//     let soma 
//     let valor = document.querySelector(".form-control");
//     valor.addEventListener("input", (e)=>{
//         let preço = document.getElementById("valor").innerHTML;
//         preço = preço.replace("R$", "");
//         preço = preço.replace(",", ".");
//         let quantidade = document.getElementById("qt").value;
//         soma = preço * quantidade;
//         // sessionStorage.setItem("totalCart", sessionStorage.getItem("totalCart")+soma);
//         // console.log(preço);
//         // console.log(quantidade);
//         console.log(soma);
//         let carrinho = document.querySelector("#carrinho")
//         carrinho.addEventListener("click", (e)=>{
//             let somat = sessionStorage.getItem("totalCart")
//             sessionStorage.setItem("totalCart", somat+soma);
//             window.location= "home.html"
//     })
//     })
// }
// let totalCart
function addCart1(){
    let  preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$", "");
    preço = preço.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma1", soma)
    window.location.replace("home.html");
}
function addCart2(){
    let  preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$", "");
    preço = preço.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma2", soma)
    window.location.replace("home.html");
}
function addCart3(){
    let  preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$", "");
    preço = preço.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma3", soma)
    window.location.replace("home.html");
}
function addCart4(){
    let  preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$", "");
    preço = preço.replace(",", ".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma4", soma)
    window.location.replace("home.html");
}
    // sessionStorage.getItem("soma"+i)!== null
    // for (let i = 1; i<=4; i++){
    //     if (sessionStorage.getItem("soma"+i)=== null){
    //         sessionStorage.setItem("soma"+i, soma)
    //         // totalCart+= parseFloat(sessionStorage.getItem("soma"+i));
    //         break
    //     }
    // }
    
    // if (sessionStorage.getItem("soma1") == null)
    // sessionStorage.setItem("soma1", soma);




// function addCart(){
//     sessionStorage.setItem("totalCart", soma)
// }
function getCart(){
    // for (let i = 1; i<=4; i++){
    //     if (sessionStorage.getItem("soma"+i)=== null){
    //         sessionStorage.setItem("soma"+i, 0)
    //     }
    // }
    let totalCart= parseFloat(sessionStorage.getItem("soma1"))+ 
                   parseFloat(sessionStorage.getItem("soma2"))+ 
                   parseFloat(sessionStorage.getItem("soma3"))+ 
                   parseFloat(sessionStorage.getItem("soma4"));
    
    document.getElementById("totalCarrinho").value = "R$"+totalCart+",00";
    
    console.log(sessionStorage.getItem("soma1"));
    console.log(sessionStorage.getItem("soma2"));
    console.log(sessionStorage.getItem("soma3"));
    console.log(sessionStorage.getItem("soma4"));
    // for (let i = 1; i<=4; i++){
    //     if (sessionStorage.getItem("soma"+i)=== 0){
    //         sessionStorage.setItem("soma"+i, null)
    //     }
    // }
    // console.log(totalCart)
    let btnVista = document.querySelector("#btnVista");
    let btnParcelado = document.querySelector("#btnParcelado");
    let inputVista = document.querySelector("#inputVista");
    let inputParcelado = document.querySelector("#inputParcelado");
    let select = document.querySelector("#selectParcelas");
    select.addEventListener("change", (e)=>{
        switch (select.value){
            case "1":
            inputParcelado.value = "R$"+((totalCart/1).toFixed(2)).replace(".", ",")
            // +",00"
            break;
            case "2":
            inputParcelado.value = "R$"+((totalCart/2).toFixed(2)).replace(".", ",")
            // +",00"
            break;
            case "3":
            inputParcelado.value = "R$"+((totalCart/3).toFixed(2)).replace(".", ",")
            // +",00"
            break;
            case "4":
            inputParcelado.value = "R$"+((totalCart/4).toFixed(2)).replace(".", ",")
            // +",00"
            break;  
            case "5":
            inputParcelado.value = "R$"+((totalCart/5).toFixed(2)).replace(".", ",")
            // +",00"
            break;
        }
    })
    // const radios = document.querySelectorAll("input");
    // const radios = document.getElementsByName("options-outlined");
    // for (const radio of radios){

    // }
    // radios.addEventListener("")
    btnVista.addEventListener("click", (e)=>{
        if (btnVista.checked == true){
            inputVista.disabled = false
            inputVista.value = "R$"+totalCart+",00"
            select.disabled = true
            inputParcelado.disabled = true
            inputParcelado.value = ""
        } else {
            inputVista.disabled = true
            inputVista.value = ""
            inputParcelado.disabled = false
            select.disabled = false
                              
        }})
    btnParcelado.addEventListener("click", (e)=>{
        if (btnParcelado.checked == true){
            inputVista.disabled = true
            inputVista.value = ""
            inputParcelado.disabled = false
            select.disabled = false
        } else {
            inputVista.disabled = false
            inputParcelado.disabled = true
            select.disabled = true
            inputParcelado.value = ""  }})
}
function clear(){
    const limparcarrinho = document.querySelector("#clear")
    limparcarrinho.addEventListener("click", (e)=>{
        sessionStorage.setItem("soma1", 0);
        sessionStorage.setItem("soma2", 0);
        sessionStorage.setItem("soma3", 0);
        sessionStorage.setItem("soma4", 0);
    
        let totalCart1= parseFloat(sessionStorage.getItem("soma1"))+ 
                       parseFloat(sessionStorage.getItem("soma2"))+ 
                       parseFloat(sessionStorage.getItem("soma3"))+ 
                       parseFloat(sessionStorage.getItem("soma4"));
        
        document.getElementById("totalCarrinho").value = "R$"+totalCart1+",00";
    
        console.log(sessionStorage.getItem("soma1"));
        console.log(sessionStorage.getItem("soma2"));
        console.log(sessionStorage.getItem("soma3"));
        console.log(sessionStorage.getItem("soma4"));
    })

    
}
function login(){
    let usuario = document.getElementById("usuario").value;
    if (usuario == ""){
        alert("Insira um nome de usuário!")
    } else {
        window.location.replace ("home.html");
        // o .replace SUBSTITUI a página, deixando um caminho sem volta ,precisa usar parênteses
        sessionStorage.setItem('usuario1', usuario);
        alert("Bem-Vindo, "+ usuario)
        
    }
    sessionStorage.setItem("soma1", 0)
    sessionStorage.setItem("soma2", 0)
    sessionStorage.setItem("soma3", 0)
    sessionStorage.setItem("soma4", 0)

    
}
function getlogin(){
    document.getElementById("bemvindo").innerHTML =  sessionStorage.getItem("usuario1");
    // innerHTML é necessário para "injetar" um texto
}
function cep(){
    const cep = document.querySelector("#cep")
    cep.addEventListener("input",(e)=>
    {
        let search = cep.value.replace("-", "")
        const options ={
            method: 'GET',
            mode: 'cors',
            Cache: 'default'
        }
        fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then(Response =>{Response.json()
            .then(data => mostrarDados(data))
        })
        .catch(e => console.log('Erro Inesperado '+ e,message))
    })
    const mostrarDados = (result)=>{
        for(const campo in result){
            if (document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = result[campo]
            }
        }
    }
}
function zoom(){
    const card1 = document.getElementById("card1");
    const img = document.querySelector(".card-img");
    card1.addEventListener("mousemove", (e)=>{
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2)";


    })
    card1.addEventListener("mouseleave", (e)=>{
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";

    })
}
