// --------------------------ForEach ------------------------------

var comida = ["pão", "arroz", "pizza", "hamburguer"];

//Foreach com function
comida.forEach(function(valor){
    console.log(valor)
})


// Foreach em uma linha
comida.forEach(valor => console.log(valor))

// ------------------ For In -- para pegar as informações que contem na array carro

var carros = [
    {id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, createdAt: 15345606085621},
    {id: 2, modelo: "Punto", marca: "Fiat", preco: 120000, createdAt: 1534506085621}
]

for(let caracteristica in carros){
    console.log(carros[caracteristica])
}

// --------------------- For of -- pra propriedades especificas.

for (const carro of carros){
    console.log(carro.preco)
}

// ----------------- For
let totalPrecos = 0;
for (let i = 0; i<carros.length; i){
    let carro = carros[i];
    totalPrecos += carro.preco;
    
}
console.log(totalPrecos)

