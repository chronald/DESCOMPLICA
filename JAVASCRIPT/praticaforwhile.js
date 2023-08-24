var numeros = [1,2,3,4,5];

// variável para armazenar a soma 

let soma = 0;

// Índice inicial para o reduce.

let index = 0

// executa o reduce utilizando do while.

do {
    soma = numeros.reduce((acumulador, valor, currentIndex) =>{
        if(currentIndex <= index){
            return acumulador + valor
        }else {
            return acumulador
        }
    }, soma);
    index++;
} while (index < numeros.length);

console.log('A soma dos números é:' + soma);