// var, let e const
//var
/*
function iniciarTime(iniciaJogo: boolean){
    var nome = "Messi e Amigos";

    if(iniciaJogo){
        var cidade = "Turmalina";
    }
    console.log(`${nome} vão Jogar ${cidade}`);
}
*/
//let
/*
function iniciarTime(iniciaJogo: boolean){
    let nome = "Messi e Amigos";
    let cidade;

    if(iniciaJogo){
        cidade = "Turmalina";
    }
    console.log(`${nome} vão Jogar ${cidade}`);
}
*/
//cont
function iniciarTime(iniciaJogo) {
    var nome = "Messi e Amigos";
    var cidade;
    if (iniciaJogo) {
        cidade = "Turmalina";
    }
    // nome = "dasdas"; //Erro não compila
    console.log(nome + " v\u00E3o Jogar " + cidade);
}
iniciarTime(true);
