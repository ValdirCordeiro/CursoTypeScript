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
function iniciarTime(iniciaJogo: boolean){
    const nome: string = "Messi e Amigos";
    let cidade: string;

    if(iniciaJogo){
        cidade = "Turmalina";
    }

   // nome = "dasdas"; //Erro não compila

    console.log(`${nome} vão Jogar ${cidade}`);
} 
iniciarTime(true);
