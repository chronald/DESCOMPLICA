const carross = [

    { id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, dataCriacao: "01/01/2022" },
  
    { id: 2, modelo: "Punta", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2022" },
  
    { id: 3, modelo: "Gol", marca: "Volkswagen", preco: 40000, dataCriacao: "01/03/2022" }
  
  ];
  
  let totalPrecoss = 0;
  
  for (let i = 0; i < carross.length; i) {
  
    const carro = carross[i];
  
    totalPrecoss += carro.preco;
  
  }
  
  console.log("Total dos preços dos carros:", totalPrecoss);