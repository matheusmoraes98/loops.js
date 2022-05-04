console.log(`Trabalhando com listas`);


const listasDeDestinos = new Array(
    `salvador`,
    `sao paulo`,
    `Rio de Janeiro`

);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "curitiba";

console.log("destinos possiveis");
console.log(listasDeDestinos);

const podeComprar= (idadeComprador >= 18 ||estaAcompanhada == true)

let contador = 0;
let destinoExiste = false;
while(contador<3){
    

    if (listasDeDestinos[contador] == destino){
        
        destinoExiste =true;
        break;
    }    
    contador +=1;
} 
console.log("Destino existe : ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro");
}



for(let cont = 0;contador <3; cont = cont++){
    if (listasDeDestinos[contador] == destino){
        
        destinoExiste =true;
        
    }    
    
}


//for(let i = 0;i <3; i = cont++){
    //if (listasDeDestinos[i] == destino){
        
      //  destinoExiste =true;
        
   // }    
    
//