
class Fighter {
    constructor(name, attack, defense, PP, luck){

        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.PP = PP;
        this.luck = luck;
        this.HP = 100;
    }
}

    let f1 = new Fighter ("The Dude", 3, 2, 5, 7);
    let f2 = new Fighter ("Hunter Thompson", 3, 2, 5, 7);
    let f3 = new Fighter ("Renton", 3, 2, 5, 7);
    let f4 = new Fighter ("Liam Gallagher", 3, 2, 5, 7);
    let f5 = new Fighter ("Pato Donald", 3, 2, 5, 7);
    let f6 = new Fighter ("Random Cat", 3, 2, 5, 7);

   
arrayallFighters= [f1, f2, f3, f4, f5, f6];

let arraySeleccionados = [];
const maximaSeleccionDePJ = 2;

const selectPJ = (pos) => {
    // Solo seleccionamos mientras no superemos el limite
    if (arraySeleccionados.length < maximaSeleccionDePJ) {
      arraySeleccionados.push(arrayallFighters[parseInt(pos)]);
      asignarParaPelear()
    }}

    const asignarParaPelear = () => {
        if (arraySeleccionados[0]) {
          pjSelec1 = arraySeleccionados[0];
        }
      
        if (arraySeleccionados[1]) {
          pjSelec2 = arraySeleccionados[1];
        }
      };






let pjSelec1;
let pjSelec2;

    /*let availableFighters = document.getElementsByClassName ('fighter');
    let selectedFighters = [];

    console.log(availableFighters)

   for (let fighter = 0; fighter < availableFighters.length; fighter++){
       availableFighters[fighter].addEventListener('click', () => {
        selectFighter(availableFighters[fighter].id)
       });
    }

    let selectFighter = function(selected){
    
        selectedFighters.push(allFighters[selected]);
console.log(selectedFighters)
    }

   
    const maxNumPlayer = 2;
*/
