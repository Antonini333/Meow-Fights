//Constructor de luchadores

class Fighter {
    constructor(nombre, ataque, defensa, agilidad, suerte){

        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.agilidad = agilidad;
        this.suerte = suerte;
        this.vida = 100;

    }
}
    let f1 = new Fighter ("Colonel Meow", 3, 2, 5, 7);
    let f2 = new Fighter ("Garfi", 3, 2, 5, 7);
    let f3 = new Fighter ("Grumpy Cat", 3, 2, 5, 7);
    let f4 = new Fighter ("Hover Kitty", 3, 2, 5, 7);
    let f5 = new Fighter ("Lil' Bub", 3, 2, 5, 7);
    let f6 = new Fighter ("Pudge", 3, 2, 5, 7);

    


/*traductor

let traductor = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6
}  */

 

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
            "No has escogido un personaje"
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
        textChoose.innerText = "PLAYER 2: CHOOSE MEOW";
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