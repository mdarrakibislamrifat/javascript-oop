
const rifat = {
    name: "Rifat",
    birthday: "2000-05-16",
    montlySalary: 20000,
    noOfMonths: 12,


    // method
    calculateAge() {
        const diff_ms = Date.now() - new Date(this.birthday).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    },



    calculateYearlySalary() {
        return (this.monthlySalary * this.noOfMonths).toLocaleString();
    }

}


console.log(rifat.calculateAge());
console.log(rifat.calculateYearlySalary());








// class is a blueprint of an object

class Player {

    #name; // private property
    #birthday; // private property
    #monthlySalary; // private property
    #noOfMonths; // private property

    constructor(name, birthday, monthlySalary, noOfMonths) {
        this.#name = name;
        this.#birthday = birthday;
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths;
    }

    // method
    calculateAge() {
        const diff_ms = Date.now() - new Date(this.#birthday).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }



    calculateYearlySalary() {
        return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
    }
}


const player1 = new Player("Rifat", "2000-05-16", 20000, 12);

console.log(player1.calculateAge());
console.log(player1.calculateYearlySalary()); 