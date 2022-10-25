// Transformando os elementos e suas propriedades em objetos

let planeta1 = {
nome: "Mercúrio",
duracaoAno: 88,
gravidade: 3.7, 
atmosferaComposicao: ["Hélio","Sódio","Oxigênio"],
sistemaSolar: true,
Curiosidade: ["É o planeta mais denso do sistema solar."]
}

let planeta2 = {
nome: "Vênus",
duracaoAno: 225,
gravidade: 8.87, 
atmosferaComposicao: ["CO2","N2"],
sistemaSolar: true,
Curiosidade: ["Um dia em vênus é mais longo do que um ano."]
}

let planeta3 = {
nome: "Terra",
duracaoAno: 365,
gravidade: 9.8, 
atmosferaComposicao: ["Nitrogênio","Oxigênio"],
sistemaSolar: true,
Curiosidade: ["A terra é o único planeta do sistema solar dividido por placas tectônicas."]
}


//Criando um array vazio

let arrayObjetosElementos  = []

//Adicionando os objetos com push ao array vazio criado

arrayObjetosElementos.push(planeta1,planeta2,planeta3)

//Adicionando novos elementos a partir da verificação de ser um elemento natural.

const planeta4 = {
nome: "Marte",
duracaoAno: 687,
gravidade: 3.721, 
atmosferaComposicao: ["Nitrogênio","CO2"],
sistemaSolar: true,
Curiosidade: ["Uma espaçonave dura apenas cerca de 60 dias em uma viagem à Marte."]
}
if(planeta4.sistemaSolar === true){
    arrayObjetosElementos.push(planeta4)
}else{
    alert(`O elemento ${planeta4.nome} não foi adicionado, pois é sintético`)
}


const planeta5 = {
nome: "Kepler 8b",
duracaoAno: 3.35,
gravidade: 0.994, 
atmosferaComposicao: ["desconhecido"],
sistemaSolar: false,
Curiosidade: ["Esse planeta está a 1,9 anos-luz da terra."] 
}

if(planeta5.sistemaSolar === true){
    arrayObjetosElementos.push(elemento5)
}else{
    alert(`O planeta ${planeta5.nome} não foi adicionado, pois não pertence ao sistema solar`)
}

console.log(arrayObjetosElementos)


const planeta6 = {
nome: "Júpiter",
duracaoAno: 4380,
gravidade: 24.79, 
atmosferaComposicao: ["Hidrogênio","CO2"],
sistemaSolar: true,
Curiosidade: ["Caberiam aproximadamente mil terras em Júpiter"]

}

if(planeta6.sistemaSolar === true){
    arrayObjetosElementos.push(planeta6)
}else{
    alert(`O planeta ${planeta6.nome} não foi adicionado, pois não pertence ao sistema solar`)
}



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


