 // declaração de função

 function minhafuncao(param){
    //bloco de codigo   
 }  
 minhafuncao("param")

 // expressão de função

 //const soma = function(x,y) { return x+y} 
 //console.log(soma(3,3))

 //diferença principal: HOISTING
 // funções e var sao "listadas " no topo

 console.log(apresentar())
    function apresentar (){
        return "Olá";
    
    }
    
    const soma = function (x,y){return x+y}
    console.log(soma(1,1))

