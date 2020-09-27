//Constructor de luchadores

class Fighter {
    constructor(name, atk, dfs, luck){

        this.name = name;
        this.atk = atk;
        this.dfs = dfs;
        this.luck = luck;
        this.HP = 200;

    }
}
    let f1 = new Fighter ("Colonel Meow", 8, 2, 5);
    let f2 = new Fighter ("Garfi", 8, 2, 5);
    let f3 = new Fighter ("Grumpy Cat", 8, 2, 5);
    let f4 = new Fighter ("Hover Kitty", 8, 2, 5);
    let f5 = new Fighter ("Lil' Bub", 8, 2, 5);
    let f6 = new Fighter ("Pudge", 8, 2, 5, 7);

        
 
//traductor
const traductor = (id) =>{
    switch (id) {
        case "cat1":
        return f1;
        case "cat2":
        return f2;
        case "cat3":
        return f3;
        case "cat4":
        return f4;
        case "cat5":
        return f5;
        case "cat6":
        return f6;
        default:
        "Error"
        break;
    }
}




let cat1 = document.getElementById("cat1");
let cat2 = document.getElementById("cat2");
let cat3 = document.getElementById("cat3");
let cat4 = document.getElementById("cat4");
let cat5 = document.getElementById("cat5");
let cat6 = document.getElementById("cat6");


let player1 = "";
let player2 = "";

let textChoose = document.getElementById("textChoose");
textChoose.innerText = "PLAYER 1: CHOOSE MEOW";

let pointedCat = (event) =>{
   let pointed = event.target.id;
    if (player1 === ""){
        player1 = traductor(pointed);
        let textChoose = document.getElementById("textChoose");
        textChoose.innerText = "TURN FOR PLAYER 2: CHOOSE YOUR MEOW";
   }else{ player2 = traductor(pointed)
         cambiaPantalla(3);

   }if (player2 === player1){
    let textChoose = document.getElementById("textChoose");
    textChoose.innerText = "CAN'T CHOOSE SAME MEOW"
       cambiaPantalla(2);
   }
     }


     cat1.addEventListener('click', pointedCat);
     cat2.addEventListener('click', pointedCat);
     cat3.addEventListener('click', pointedCat);
     cat4.addEventListener('click', pointedCat);
     cat5.addEventListener('click', pointedCat);
     cat6.addEventListener('click', pointedCat);


     const muestraPersonaje = (ev) => {

        document.getElementById("imagenJugador1").src = player1.imagen;
        document.getElementById("nombreJugador1").innerText = player1.nombre;
        document.getElementById("vidaJugador1").innerText = player1.vida;
        
        document.getElementById("imagenJugador2").src = player2.imagen;
        document.getElementById("nombreJugador2").innerText = player2.nombre;
        document.getElementById("vidaJugador2").innerText = player2.vida;}








































/*
// Método selección equipo evento onClick
    let availableFighters = document.getElementsByClassName("fighter");
    let selectedFighters1 = [];
    let selectedFighters2 = [];

    for (let fighter = 0; fighter < availableFighters.length; fighter++)
    {availableFighters[fighter].addEventListener('click', () => {
        selectFighter(availableFighters[fighter].id)
});
}

//Pusheamos luchadores a equipo 1 y 2 desde AllFighters

let selectFighter = function(selected){
    if(selectedFighters1.length < maxNumPlayer){
    selectedFighters1.push(allFighters[selected]) ;

}else if (selectedFighters2.length < maxNumPlayer){
        selectedFighters2.push(allFighters[selected]);
}else if (selectedFighters2.length = maxNumPlayer){
    console.log("FIGHT"); //AQUI SE ACTIVARÍA EL BOTON DE FIGHT/CAMBIA PANTALLA POR CSS        

}};


const maxNumPlayer = 1;
console.log("Player1", selectedFighters1);
console.log("Player2", selectedFighters2);


*/