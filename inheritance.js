class Player {
    #name; // private property
    #age; // private property

    constructor(name, age) {
        this.#name = name;
        this.#age = age;

    }

    getPlayersInfo() {
        return `Name: ${this.#name}, Age: ${this.#age}`;
    }
}




class Cricketer extends Player {

    #centuries;

    constructor(name, age, centuries) {
        super(name, age);
        this.#centuries = centuries;
    }


}





class Footballer extends Player {
    #goals;
    constructor(name, age, goals) {
        super(name, age);
        this.#goals = goals;
    }

}


const sakib = new Cricketer("Sakib", 35, 30);
console.log(sakib.getPlayersInfo());

const ronaldo = new Footballer("Ronaldo", 38, 800);
console.log(ronaldo.getPlayersInfo());