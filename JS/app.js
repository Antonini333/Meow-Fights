
const cambiaPantalla = (valor) => {

    //Ahora se a que pantalla quiero dirigirme al concatenar fase + valor que viene
    //por parámetro.
    let faseDestino = "fase" + valor;

    //A continuación creo un array con todas fases.
    let arrayFases = ["fase1","fase2","fase3"];

    //El siguiente paso es incluir en arrayfases, todas las fases MENOS la de destino, para ello usamos
    //filter.
    arrayFases = arrayFases.filter(val => !faseDestino.includes(val));

    //Primero habilitamos la fase a la que queremos ir

    document.getElementById(faseDestino).style.display = "block";

    //Finalmente deshabilitamos el resto

    for(let pantalla of arrayFases){
        document.getElementById(pantalla).style.display = "none";
    }
}

const reset = () => {

    player1 = "";
    player2 = "";

    battleViewer.innerText = "";

     f1 = new Fighter ("Colonel Meow", 8, 2, 5, "img/colonelBattle.png");
     f2 = new Fighter ("Garfi", 8, 2, 5, "img/garfiBattle.jpg");
     f3 = new Fighter ("Grumpy Cat", 8, 2, 5, "img/grumpyBattle.jpg");
     f4 = new Fighter ("Hover Kitty", 8, 2, 5, "img/hoverkitty.jpg");
     f5 = new Fighter ("Lil' Bub", 8, 2, 5, "img/lilbubBattle");
     f6 = new Fighter ("Pudge", 8, 2, 5, 7, "img/pudgeBattle.jpg");

    textChoose.innerText = "PLAYER 1: CHOOSE MEOW";

}


//elenco de funciones útiles que podremos utilizar a nuestro antojo en varios proyectos

