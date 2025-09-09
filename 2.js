// Inheritance example



class Human{
    constructor(name) {
        this.name = name;
        this.arms = 2;
        this.legs = 2;
    }
}


class Baby extends Human { 
    constructor(name) {
        super(name);
        this.cute=true;
    }

    cry() {
        console.log(`${this.name} is crying`);
    }
}




class Teenager extends Human { 
    constructor(name) {
        super(name);
        this.emotional=true;
    }
    party() {
        console.log(`${this.name} is partying`);
    }
}



const baby1=new Baby("Rifat");
console.log(baby1);
baby1.cry();

