//IF comum
var pais = "Brasil";

if (pais != "Brasil"){
    console.log("Você é estrangeiro");
}else {
    console.log("Você é brasileiro")
}

// IF com else if

var idade =  22

if (idade <16 ){
    console.log("não vota")
}else if (idade <18 || idade > 65){
    console.log("Voto opcional")
}else {
    console.log("Voto obrigatório")
}

//Switch

var diaSem = 1

switch(diaSem){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3: 
        console.log("Terça")
        break;
    default: // entra no default qnd não está na variavel
        console.log("Esse dia da semana não existe")
}