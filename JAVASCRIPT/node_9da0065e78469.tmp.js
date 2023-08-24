var carros = [
    {id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, createdAt: 15345606085621},
    {id: 2, modelo: "Punto", marca: "Fiat", preco: 120000, createdAt: 1534506085621}
]

let totalPrecos = 0;
for (let i = 0; i<carros.length; i){
    let carro = carros[i];
    totalPrecos += carro.preco
    
}

console.log(totalPrecos)