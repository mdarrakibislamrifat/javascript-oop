class BetterArray {
    #items;

    constructor() {
        this.#items = [];
    }


    getItems() {
        return [...this.#items];
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItem(item) {
        this.#items = this.#items.filter(i => i !== item);
    }


    updateItem(item, newItem) {
        const index = this.#items.indexOf(item);
        if (index !== -1) {
            this.#items[index] = newItem;
        }
    }
}


const array = new BetterArray();

array.addItem("I love bangladesh");

console.log(array.getItems());