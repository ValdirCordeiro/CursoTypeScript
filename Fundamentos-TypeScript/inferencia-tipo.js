var quantidade = 20;
//quantidade = "asd"; -- Não compila
var x = [1, 2, null];
//x[0] = true; -> não compila
// Contextual typing
window.onmousedown = function (evento) {
    this.console.log(evento.button); // OK
    // this.console.log(evento.buton); //Errado -> Não compila
};
