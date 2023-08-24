var idade = 28; 
var anosExperiencia = 1;
var educacao = "superior"
var certificado = true

var idadeMinima = 18;
var experienciaMinima = 5;
var nivelEducacaoMinimo = "superior";
var certificadoObrigatorio = true

if(idade >= idadeMinima && anosExperiencia >= experienciaMinima && (educacao === nivelEducacaoMinimo || certificado) && (!certificadoObrigatorio || certificado) ){
    console.log("Contratado")
}else {
    console("Você não atende a vaga, se inscreva em nosso banco de dados para futuras vagas.")
}
