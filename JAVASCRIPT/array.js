var valores = [8, 1, 7, 2 ,9];

console.log(valores[3]);

console.log('Array invertido: ' + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log('Posição: ' + pos + " Valor: " + valores[pos])
}


// Calcular á média de todos os numeros de um array

var soma = 0 
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos]
}

var media = soma/valores.length
console.log(media)

console.log(valores.length)

var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('|'));

console.log(arr1.length);

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do numero 3 " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1)

arr1.pop();

console.log(arr1)

// ------------SPLICE--------------------------
var arr2 = [1, 2, 3, 4, 5, 6, 7];

arr2.splice(1, 1)

console.log(arr2);

var nomes = ["Maria","João","Lucas","Pedro"];

var novos = nomes.splice(1,2, "Luiz", "Ronaldo");

console.log(nomes);

/*----------------------Unshift--------------------------*/
var pais = ["Brasil", "Argentina", "Colombia"];

pais.unshift("Uruguai");

console.log(pais)

// ------------------------------------------------------

var nomess = ["Guilherme", "Manoel", "Samuel", "Davi", "João"];
nomess.unshift("Monica");
console.log(nomess);

var retirar = nomess.pop();

console.log(nomess)

var alterarNome = nomess.splice(2, 1, "Emanoel");

console.log(alterarNome)
console.log(nomess)

var posicao = nomess.indexOf("Samuel");
console.log(posicao);

// Utilizando mais arrays

//SLICE

//array.slice(de, até); // ate pega a anterior
let array = [1,2,3,"hello world", 4.12, true];

let newArray = array.slice(0,3);

console.log(newArray)

var seres = ["Eduardo", "Joana", "Wallace", "Rosana"]

var seresNovo = seres.slice(0,3);

console.log(seresNovo)

//CONCAT

let titulo = "Dr.";
let nomee = "João da Silva";
let nomeCompleto = titulo.concat(nomee)
console.log(nomeCompleto)

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = array1.concat(array2)
console.log(array3);


// EXEC slice

var mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var trimestre1 = mesesAno.slice(0,3)
console.log(trimestre1)
var trimestre2 = mesesAno.slice(3,6)
console.log(trimestre2)
var trimestre3 = mesesAno.slice(6,9)
console.log(trimestre3)
var trimestre4 = mesesAno.slice(9,12)
console.log(trimestre4)


// ------------Filter ---------------------

// Inline 
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evens = numbers.filter(item => item % 2 === 0)
console.log(evens + " filter inline")


// Function dentro do filter
var numerosFiltrados = numbers.filter (
    function(valor){
        return valor > 5
    }
);

console.log(numerosFiltrados + " Function dentro do filter")

// Function solta criando variavel pro filter puxar a function
function filtrarValores(valor){
    return valor < 5;
}

var numerosEncontrados = numbers.filter(filtrarValores)
console.log(numerosEncontrados + " Funcion solta") 

//Function anonima

var r1= numbers.filter((valor)=> {
    return valor>5
})
console.log(r1 + " Function anonima");

// Function resumo do resumo
var r2= numbers.filter(valor=> valor>5);
console.log(r2 + " Function resumo")

// Array com variaveis e filtrando utilizando fuction
var funcionario = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40}
]

var pessoasListagem = funcionario.filter(
    function(valor){
    return valor.nome.length <5

})

console.log(pessoasListagem)


// EXERCICIO FILTER
var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletronico" },
    {id: 2, descricao: "Notebook", categoria: "Eletronico" },
    {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico" },
    {id: 1, descricao: "Fogão", categoria: "Eletrodomestico" },
]

var result = produtos.filter(
    function(valor){
        return valor.categoria === "Eletronico"
    }
)

console.log(result)

// --------------------Map--------------------------------------

var arrayNumbers = [3,4,5,6]

var alterArr = arrayNumbers.map(function(valor) {
    return valor * 3 
})

console.log(alterArr)

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40}
]

nomesFuncionario = funcionarios.map(pessoa => pessoa.nome)

console.log(nomesFuncionario)

// ------------------------- Reduce ----------------------------

var total = 0;
var numeros = [1,2,3,4,5,6];
for (var i = 0; i<numeros.length; i++ ){
    total+= numeros[i]
}

var  numberss = [1,2,3,4,5,6];
var totaal = numberss.reduce(function(total, numero){
    return total + numero
},0)

// --------------------------ForEach ------------------------------

var comida = ["pão", "arroz", "pizza", "hamburguer"];

//Foreach com function
comida.forEach(function(valor){
    console.log(valor)
})


// Foreach em uma linha
comida.forEach(valor => console.log(valor))