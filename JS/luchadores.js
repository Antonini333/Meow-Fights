
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


    let f1 = new Fighter ("The Dude", 3, 2, 5, 7);
    let f2 = new Fighter ("Hunter Thompson", 3, 2, 5, 7);
    let f3 = new Fighter ("Renton", 3, 2, 5, 7);
    let f4 = new Fighter ("Liam Gallagher", 3, 2, 5, 7);
    let f5 = new Fighter ("Pato Donald", 3, 2, 5, 7);
    let f6 = new Fighter ("Random Cat", 3, 2, 5, 7);

   //traductor
let allFighters = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6
}

    let availableFighters = document.getElementsByClassName("fighter");
    let selectedFighters1 = [];
    let selectedFighters2 = [];

    for (let fighter = 0; fighter < availableFighters.length; fighter++)
    {availableFighters[fighter].addEventListener('click', () => {
        selectFighter(availableFighters[fighter].id)
});
}

let selectFighter = function(selected){
    if(selectedFighters1.length < maxNumPlayer){
    selectedFighters1.push(allFighters[selected]);

}else if (selectedFighters2.length < maxNumPlayer){
        selectedFighters2.push(allFighters[selected]);
}else if (selectedFighters2.length = maxNumPlayer){
    console.log("FIGHT");        

}};


const maxNumPlayer = 2;
console.log(selectedFighters1);
console.log(selectedFighters2);

