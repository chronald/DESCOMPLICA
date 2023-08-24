var bebida = "Chá"

var casasDecimais = 2
var valorCafe = 5.50 
var valorLeite = 6
var valorCha = 4.50
var numeroFormatadoCafe = valorCafe.toFixed(casasDecimais);
var numeroFormatadoLeite = valorLeite.toFixed(casasDecimais);
var numeroFormatadoCha = valorCha.toFixed(casasDecimais);


switch(bebida){
    case 'Café':
        console.log(`R$${numeroFormatadoCafe }`)
    break;
    case 'Leite':
        console.log(`R$${numeroFormatadoLeite}`)
    break;
    case 'Chá':
        console.log(`R$${numeroFormatadoCha}`)
    break;
    default:
        console.log("A opção Escolhida não tem no cardápio, você deve escolher entre: Café, Leite, Chá")

}