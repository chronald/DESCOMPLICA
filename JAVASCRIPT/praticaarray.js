const array = [1, 'dois', 3, 'quatro', 5, 'seis'];

// Utilizando map para duplicar os números e transformar as strings em letras maiúsculas
const mapArray = array.map((valor) => {
    if(typeof valor === "number"){
        return valor * 2 
    }else if (typeof valor === 'string'){
        return valor.toUpperCase();
    }else {
        return valor
    }
})

console.log(mapArray)

// Utilizando filter para filtrar somente os números do array

const filtroArray = array.filter((valor)=> typeof valor ==='number')

console.log(filtroArray)

// Utilizando reduce para somar os números do array

const somaArray = array.reduce((total, soma) =>{
    if(typeof soma === "number"){
        return total + soma 
    }else {
        return total;
    }
}, 0);
console.log(somaArray)