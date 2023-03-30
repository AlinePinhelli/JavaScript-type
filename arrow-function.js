function apresentar (nome){
    return `meu nome é ${nome}`;
}

//arrow function

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (x,y)=> x+y;

// arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (x,y)=> {
    if (x > 10|| y >10){
        return "somente números de 1 a 9";
    } else {
        return x+y;
    }
}
console.log(somaNumerosPequenos(11,20))