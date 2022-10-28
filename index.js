// Transformando os elementos e suas propriedades em objetos

let planeta1 = {
nome: "Mercúrio",
imagem: "./img-projeto-web/mercury-background.png",
link:"https://solarsystem.nasa.gov/planets/mercury/overview/",
duracaoAno: 88,
gravidade: 3.7, 
atmosferaComposicao: ["Hélio","Sódio","Oxigênio"],
sistemaSolar: true,
Curiosidade: ["É o planeta mais denso do sistema solar."]
}

let planeta2 = {
nome: "Vênus",
imagem: "./img-projeto-web/venus-background.png",
link:"https://solarsystem.nasa.gov/planets/venus/overview/",
duracaoAno: 225,
gravidade: 8.87, 
atmosferaComposicao: ["CO2","N2"],
sistemaSolar: true,
Curiosidade: ["Um dia em vênus é mais longo do que um ano."]
}

let planeta3 = {
nome: "Terra",
imagem: "./img-projeto-web/earth-background.png",
link:"https://solarsystem.nasa.gov/planets/earth/overview/",
duracaoAno: 365,
gravidade: 9.8, 
atmosferaComposicao: ["Nitrogênio","Oxigênio"],
sistemaSolar: true,
Curiosidade: ["A terra é o único planeta do sistema solar dividido por placas tectônicas."]
}

const planeta4 = {
    nome: "Marte",
    imagem: "./img-projeto-web/mars-background.png",
    link:"https://solarsystem.nasa.gov/planets/mars/overview/",
    duracaoAno: 687,
    gravidade: 3.721, 
    atmosferaComposicao: ["Nitrogênio","CO2"],
    sistemaSolar: true,
    Curiosidade: ["Uma espaçonave dura apenas cerca de 60 dias em uma viagem à Marte."]
    }


const planeta6 = {
    nome: "Júpiter",
    imagem: "./img-projeto-web/jupiter-background.png",
    link:"https://solarsystem.nasa.gov/planets/jupiter/overview/",
    duracaoAno: 4380,
    gravidade: 24.79, 
    atmosferaComposicao: ["Hidrogênio","CO2"],
    sistemaSolar: true,
    Curiosidade: ["Caberiam aproximadamente mil terras em Júpiter"]
        
    }
    
    const planeta7 = {
        nome: "Saturno",
        imagem: "./img-projeto-web/saturn-background.png",
        link:"https://solarsystem.nasa.gov/planets/saturn/overview/",
        duracaoAno: 10585,
        gravidade: 10.44, 
        atmosferaComposicao: ["Hidrogênio","Hélio","Metano"],
        sistemaSolar: true,
        Curiosidade: ["Saturno é o planeta do sistema solar que possui mais luas, somando 82 no total."]
        
    }
    
    
    const planeta8 = {
        nome: "Urano",
        imagem: "./img-projeto-web/urano-background.png",
        link:"https://solarsystem.nasa.gov/planets/uranus/overview/",
        duracaoAno: 30660,
        gravidade: 8.87, 
        atmosferaComposicao: ["Hidrogênio","Hélio","Metano"],
        sistemaSolar: true,
        Curiosidade: ["Cientistas preveem que chuvas de diamantes possam ocorrer em Urano. "]
        
    }


    const planeta9 = {
        nome: "Netuno",
        imagem: "./img-projeto-web/netuno-background-new.png",
        link:"https://solarsystem.nasa.gov/planets/neptune/overview/",
        duracaoAno: 60225,
        gravidade: 11.15, 
        atmosferaComposicao: ["Hidrogênio","Hélio","Metano"],
        sistemaSolar: true,
        Curiosidade: ["Netuno é o planeta mais frio do sistema solar, com temperaturas na faixa de -245°C na superfície."]
        
    }


    const planeta10 = {
        nome: "Plutão",
        imagem: "./img-projeto-web/pluto-background.png",
        link:"https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/",
        duracaoAno: 90520,
        gravidade: 0.62, 
        atmosferaComposicao: ["Metano","Etileno","Aceliteno"],
        sistemaSolar: true,
        Curiosidade: ["Plutão deixou de ser planeta em 2007, hoje ele é considerado um planeta-anão."]
        
    }
//Criando um array vazio

let arrayObjetosElementos  = []

//Adicionando os objetos com push ao array vazio criado

arrayObjetosElementos.push(planeta1,planeta2,planeta3)

//Criando uma função para adicionar planetas seguindo a condição de serem pertencentes ao sistema solar.

function adicionarPlaneta(planeta){
    if(planeta.sistemaSolar === true){
        arrayObjetosElementos.push(planeta)
    }else{
        alert(`O elemento ${planeta.nome} não foi adicionado, pois é sintético`)
    }   
}

adicionarPlaneta(planeta4)
adicionarPlaneta(planeta6)
adicionarPlaneta(planeta7)
adicionarPlaneta(planeta8)
adicionarPlaneta(planeta9)
adicionarPlaneta(planeta10)


//Média da duração dos anos dos planetas em dias terrestres

let somaDuracao=0
    for(i in arrayObjetosElementos){
        somaDuracao+= arrayObjetosElementos[i].duracaoAno
    }
let mediaDuracao=(somaDuracao)/i
   


console.log(`A média da duração dos anos dos planetas em dias terrestres é de ${mediaDuracao}`)


//Média da gravidade dos planetas em dias terrestres

let somaGravidade=0
    for(i in arrayObjetosElementos){
        somaGravidade+= arrayObjetosElementos[i].gravidade
    }
let mediaGravidade=(somaGravidade)/i
   


console.log(`A média da gravidade dos planetas em dias terrestres é de ${mediaGravidade}`)


//Checando que todos os planetas do array pertencem ao sistema solar

let checaArray = Boolean
for (i in arrayObjetosElementos){
    checaArray = checaArray && arrayObjetosElementos[i].sistemaSolar
}

console.log(`É ${checaArray} que todos os planetas do array pertencem ao sistema solar.`)

//Recriando o relatório com laços
let stringExemplo = "" 
for(elemento in arrayObjetosElementos){
    for(exemplo in elemento.atmosferaComposicao)
stringExemplo += molecula
}

console.log("======================")
console.log(stringExemplo)

//Relatório Geral

for(objeto of arrayObjetosElementos){
    for(propriedades in objeto){
        if(propriedades === "nome"){
            console.log(` \n${objeto[propriedades].toUpperCase()}\n `)
        }else{ 
            console.log(`${propriedades}: ${objeto[propriedades]}`)}
        
    }
}

function objetosEmStrings(objeto){
    let stringRelatorio = ""
    for(propriedades in objeto){
        stringRelatorio += ` ${propriedades}: ${objeto[propriedades]}\n`
       }
       return console.log(stringRelatorio)
}

console.log("====================================================")

function funcaoFiltro(array,string){
    for(objeto of array){
        for(item in objeto){
            if(objeto[item] === string){
                console.log(`${item}: ${string}`)
                return
            }
          
        }
    }
        alert("Item não encontrado")
}
 

funcaoFiltro(arrayObjetosElementos,"Marte")


let listaPlanetas = document.querySelector(".card-wrapper")

function mapearArray(){
    arrayObjetosElementos.map(planetas=>{
       
            listaPlanetas.innerHTML += ` <div class="card-conteudo swiper-slide" id="card">
                           
            <img src=${planetas.imagem} alt="" class="planeta">
            <ul class="info">
                <li><a href=${planetas.link} target="_blank" class="titulo-planeta"><strong>${planetas.nome.toUpperCase()}</strong></a></li>
                <li><strong>Duração do ano:</strong> ${planetas.duracaoAno} em dias terrestres.</li>
                <li><strong>Gravidade:</strong> ${planetas.gravidade} m/s²</li>
                <li><strong>Atmosfera:</strong>${planetas.atmosferaComposicao}</li>
                <li><strong>Curiosidade:</strong> ${planetas.Curiosidade}</li>
            </ul>
            
        </div>`
    
        })
}

mapearArray()

function filtrarPesquisa(){

    
let valorDeBusca = document.querySelector(".input").value
let planetaFiltrado = document.querySelector(".conteudo-filtrado")
let campoBusca = document.querySelector(".input")

planetaFiltrado.innerHTML=""
campoBusca.innerHTML = ""

if(valorDeBusca === ""){
    alert("Ops.. Acho que você não digitou nada.")
    mapearArray()
    
    
}

for(let planeta in arrayObjetosElementos){
    // console.log(arrayObjetosElementos[planeta].nome)
    console.log(campoBusca)
    if(valorDeBusca === arrayObjetosElementos[planeta].nome){
    planetaFiltrado.innerHTML += ` <div class="filter-card" id="card">
                       
        <img src=${arrayObjetosElementos[planeta].imagem} alt="" class="planeta">
        <ul class="info">
            <li><a href= ${arrayObjetosElementos[planeta].link} target="_blank" class="titulo-planeta"><strong>${arrayObjetosElementos[planeta].nome}</strong></a></li>
            <li><strong>Duração do ano:</strong> ${arrayObjetosElementos[planeta].duracaoAno} em dias terrestres.</li>
            <li> <strong>Gravidade:</strong> ${arrayObjetosElementos[planeta].gravidade} m/s²</li>
            <li><strong>Atmosfera:</strong>${arrayObjetosElementos[planeta].atmosferaComposicao}</li>
            <li><strong>Pertence ao Sitema:</strong> ${arrayObjetosElementos[planeta].sistemaSolar}</li>
            <li><strong>Curiosidade</strong>: ${arrayObjetosElementos[planeta].Curiosidade}</li>
        </ul>
        
    </div>`
    
    listaPlanetas.innerHTML = ""
    valorDeBusca.innerHTML = ""
    
    
    
}

}

}

function conferirValue(){
    let valueInput = document.querySelector(".input").value

    console.log(valueInput)
}



