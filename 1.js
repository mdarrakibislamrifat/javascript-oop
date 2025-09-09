class Player {
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    // in class function called name method
    play() {
        console.log(`${this.name} is playing`);
    }
}




const player1 = new Player("Rifat", 25, "Intermediate");
console.log(player1);
player1.play();