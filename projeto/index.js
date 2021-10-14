 
 let celular = function(){
     this.cor = "preto";

     this.ligar = function()
 {
     console.log(" uma ligaçao");
     return "ligando";
 }
 }
 let objeto = new celular();

 console.log(objeto.cor);

 /*
 // trabalhando com array
 let carros = ["palio 98", "ranger rover", "onix", 10, true, new Date(), function(){}];

 console.log(carros);
  
 carros.forEach(function(value, index){
 
    console.log(index, value);
 });
 */
 /*
 // aqui mostra a data
 let agora = new Date();

 console.log(agora.toLocaleDateString("pt-br"));
*/

/*// trabalhando com window
window.addEventListener('focus', event => {
    console.log("focus");
});
document.addEventListener('click', event =>{
    console.log('click');
    
});

*/
/*
// estou calculando um comando
function somar (x1, x2){
    return x1 + x2;
}
let resultado = calc(1, 2 );
console.log(resultado);
*/

/*// aqui estou fazendo tabuada
let n = 5;
for (let i = 0; i <= 10; i++) {
    console.log('${i} x ${n} = ${i*n}');
    console.log(i + "x" + n + "=" + (i * n));
}*/

/*// aqui estou usando o camando switch
let cor = "azul";

switch (cor) {
    case "verde":
        console.log("siga");
        break;
    
    case "amarelo":
        console.log("atencao");
        break;

    case "vermelho":
        console.log("pare");
        break;

    default:
        console.log("nao sei");
        
}
*/

/* // aqui comparo as cores
let cor = "amarelo";

if (cor === "verde") {
    console.log("siga");
} else if (cor ==="amarelo"){
    console.log("atencao");
} else {
    console.log("pare");
}*/

/*
// AQUI EU COMPARO SE A E IGUAL A B
let a = 10;
const b = 20;

console.log(a == b);
*/

/*var ola mundo = "ola mundo";


// AQUI EU ESCREVO NO CONSOLE
console.log('ola mundo!');
console.log('ola mundo!');
console.log('ola mundo!');
*/