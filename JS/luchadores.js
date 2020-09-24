
class Fighter {
    constructor(nombre, potencia, resistencia, defensa, ataque, agilidad, suerte){

        this.nombre = nombre;
        this.potencia = potencia;
        this.resistencia = resistencia;
        this.defensa = defensa;
        this.ataque = ataque;
        this.agilidad = agilidad;
        this.suerte = suerte;
        this.vida = 100;

    }
}


    let f1 = new Fighter ("The Dude", 3, 2, 9, 12, 5, 7);
    let f2 = new Fighter ("Hunter Thompson", 3, 2, 9, 12, 5, 7);
    let f3 = new Fighter ("Renton", 3, 2, 9, 12, 5, 7);
    let f4 = new Fighter ("Liam Gallagher", 3, 2, 9, 12, 5, 7);
    let f5 = new Fighter ("Pato Donald", 3, 2, 9, 12, 5, 7);
    let f6 = new Fighter ("Random Cat", 3, 2, 9, 12, 5, 7);


    let arrayFighters = [f1,f2,f3,f4,f5,f6] 


   console.log(arrayFighters);



