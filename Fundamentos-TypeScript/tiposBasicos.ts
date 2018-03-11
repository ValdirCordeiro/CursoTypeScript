// boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 29.99;

//string
let empresa: string = "AlgaWorks";

// Template Strings
let nome: string = "João";
console.log(`Olá, menu nome é ${nome} e tenho ${idade} anos`);

// arrays
let notas: number[] = [8, 6, 7, 9];

//tuple
let alunos: [string, number, string] = ["João", 10, "Matemática"];
console.log(alunos[0]);
console.log(alunos[1]);

//Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

//Any
let algumValor: any = 4;
algumValor = "Agora é uma string";
algumValor = true;

//void
function alerta() : void {
   // alert("teste");
}

// null e undefined -> não faz sentidor declarar as variaveis assim
let u: undefined = undefined;
let n: null;
// null e undefined são subtipos dos outros tipos

