class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3
    }
    sayName() {
        console.log(`hello ${this.name}`);
    }
    showStats() {
        console.log(`stats: ${this.name},${this.strength},${this.speed},${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
    


}
const ninja1 = new Ninja("Hyabusa");
        ninja1.sayName();
        ninja1.drinkSake();
        ninja1.showStats();