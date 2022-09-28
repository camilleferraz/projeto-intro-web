// Transformando os elementos e suas propriedades em objetos

let elemento1 = {
elemento: "Hidrogênio",
numeroAtomico: 1,
massaAtomica: 1.008, 
simbolo: "H",
isNotSitetico: true,
exemplosEmMoleculas: ["H2,H2SO4"]
}

let elemento2 = {
elemento: "Lítio",
numeroAtomico:  3,
massaAtomica:  6.941,
simbolo:  "Li",
isnotSintetico:  true,
exemplosEmMoleculas: ["LiAl(Si2O5)2"]
}

let elemento3 = {
elemento: "Sódio",
numeroAtomico:  11,
massaAtomica: 22.990,
simbolo:  "Na",
isNotSintetico:  true,
exemplosEmMoleculas: ["NaCl", "NaBr"]
}


//Criando um array vazio

let arrayObjetosElementos  = []

//Adicionando os objetos com push ao array vazio criado

arrayObjetosElementos.push(elemento1,elemento2,elemento3)

//Adicionando novos elementos a partir da verificação de ser um elemento natural.

const elemento4 = {
    elemento: "Berílio",
    numeroAtomico:4,
    massaAtomica: 9.012,
    simbolo: "Be",
    isNotSintetico: true,
    exemplosEmMoleculas:["BeCl2","BCl3"]
}
if(elemento4.isNotSintetico === true){
    arrayObjetosElementos.push(elemento4)
}else{
    alert(`O elemento ${elemento4.nome} não foi adicionado, pois é sintético`)
}


const elemento5 = {
    nome: "Promécio",
    numeroAtomico:61,
    massaAtomica: 145,
    simbolo: "Pm",
    isNotSintetico: false
}

if(elemento5.isNotSintetico === true){
    arrayObjetosElementos.push(elemento5)
}else{
    alert(`O elemento ${elemento5.nome} não foi adicionado, pois é sintético`)
}

console.log(arrayObjetosElementos)


const elemento6 = {
    elemento: "Magnésio",
    numeroAtomico:12,
    massaAtomica: 24.31,
    simbolo: "Mg",
    isNotSintetico: true,
    exemplosEmMoleculas:["Mg(OH)2","MgCO3"]

}

if(elemento6.isNotSintetico === true){
    arrayObjetosElementos.push(elemento6)
}else{
    alert(`O elemento ${elemento6.nome} não foi adicionado, pois é sintético`)
}



//Recriando o relatório com laços
let stringExemplo = "" 
for(elemento in arrayObjetosElementos){
    for(exemplo in elemento.exemplosEmMoleculas)
stringExemplo+= molecula
}

console.log("======================")
console.log(stringExemplo)

//Relatório Geral

for(objeto of arrayObjetosElementos){
    for(propriedades in objeto){
        if(propriedades === "elemento"){
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
 

funcaoFiltro(arrayObjetosElementos,"F")


