//Constructor de luchadores

class Fighter {
    constructor(name, atk, dfs, luck, img){

        this.name = name;
        this.atk = atk;
        this.dfs = dfs;
        this.luck = luck;
        this.img = img;
        this.HP = 100;

    }
    
    attack = (enemy) => {
        
        let damage = this.atk - (enemy.dfs + enemy.luck);
        damage = damage + random(7,20) - enemy.luck;
        
        enemy.HP = enemy.HP - damage;
        actHealthPoints();
        
       
        battleViewer.innerText = 
        (`${this.name} scratchs
        ${enemy.name} and makes 
        ${damage} of damage`);
    }
}



let f1 = new Fighter ("Colonel Meow", 8, 2, 5, "img/colonelBattle.png");
let f2 = new Fighter ("Garfi", 8, 2, 5, "img/garfiBattle.jpg");
let f3 = new Fighter ("Grumpy Cat", 8, 2, 5, "img/grumpyBattle.jpg");
let f4 = new Fighter ("Hover Kitty", 8, 2, 5, "img/hoverBattle.png");
let f5 = new Fighter ("Lil' Bub", 8, 2, 5, "img/lilbubBattle.jpg");
let f6 = new Fighter ("Pudge", 8, 2, 5, 7, "img/pudgeBattle.png");


    let player1 = "";
    let player2 = "";
    
    let textChoose = document.getElementById("textChoose");
    textChoose.innerText = "PLAYER 1: CHOOSE MEOW";
        
 
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



let pointedCat = (event) =>{
   let pointed = event.target.id;
    if (player1 === ""){
        player1 = traductor(pointed);
        let textChoose = document.getElementById("textChoose");
        textChoose.innerText = "TURN FOR PLAYER 2: CHOOSE YOUR MEOW";

   }else{ player2 = traductor(pointed);
         cambiaPantalla(3);
         getCat();
         actHealthPoints();

   }if (player2 === player1){
    let textChoose = document.getElementById("textChoose");
    textChoose.innerText = "YOU CAN'T CHOOSE THE SAME MEOW";
       cambiaPantalla(2);
   }
     };


     cat1.addEventListener('click', pointedCat);
     cat2.addEventListener('click', pointedCat);
     cat3.addEventListener('click', pointedCat);
     cat4.addEventListener('click', pointedCat);
     cat5.addEventListener('click', pointedCat);
     cat6.addEventListener('click', pointedCat);


     const getCat = () => {

        document.getElementById("p1Img").src = player1.img;
        document.getElementById("p1Name").innerText = player1.name;
        document.getElementById("p1HP").innerText = player1.HP;
        
        document.getElementById("p2Img").src = player2.img;
        document.getElementById("p2Name").innerText = player2.name;
        document.getElementById("p2HP").innerText = player2.HP;}

        let battleViewer = document.getElementById("battleViewer");
        
        
        const actHealthPoints = () => {

            document.getElementById("p1HP").style.width = player1.HP + "%";
            document.getElementById("p2HP").style.width = player2.HP + "%";
        } ;


        const random = (min, max) =>{
            return Math.floor(Math.random() * (max - min) + min);
        }

        let turn = random(1,3);
        
        const attackButton = () => {

           turn++;
        
            if (turn%2 === 0) {
                
                player1.attack(player2);
                getCat();
        
            
            } else if (player1.HP < 1 && player2.HP > 0){
                 cambiaPantalla(1);
                 reset();
                 let battleViewer = document.getElementById("battleViewer");
                 battleViewer.innerText = "PLAYER 2 WINS ";
                 }

            else if (player1.HP > 0 && player2.HP < 1){
                cambiaPantalla(1);
                reset();
                let battleViewer = document.getElementById("battleViewer");
                battleViewer.innerText = "PLAYER 2 WINS ";
             }else{
                player2.attack(player1);
                 getCat();
                };
            }
            

    const reset = () => {

     f1 = new Fighter ("Colonel Meow", 8, 2, 5, "img/colonelBattle.png");
     f2 = new Fighter ("Garfi", 8, 2, 5, "img/garfiBattle.jpg");
     f3 = new Fighter ("Grumpy Cat", 8, 2, 5, "img/grumpyBattle.jpg");
     f4 = new Fighter ("Hover Kitty", 8, 2, 5, "img/hoverBattle.png");
     f5 = new Fighter ("Lil' Bub", 8, 2, 5, "img/lilbubBattle.jpg");
     f6 = new Fighter ("Pudge", 8, 2, 5, 7, "img/pudgeBattle.png");


    player1 = "";
    player2 = "";
    
    textChoose = document.getElementById("textChoose");
    textChoose.innerText = "PLAYER 1: CHOOSE MEOW";
        }




        

