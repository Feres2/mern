class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    hardAlgorithm(target) {
        if (target instanceof Unit) {
            target.res += 3 ;
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
    unhandledPromiseRejection(target) {
        if (target instanceof Unit) {
            target.res -= 2 ;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    pairProgramming(target) {
        if (target instanceof Unit) {
            target.power += 2 ;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res

    }
    attack(target) {
        target.res -= this.power;
        


    }
    showStats() {
        console.log(`stats: ${this.name},${this.cost},${this.power},${this.res}`);
        if (this.res<=0){
            console.log(`${this.name} is dead`)
        }
    }
}


//!=======================Turn 1========================
const RedBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const hardAlgorithm= new Card ("Hard Algorithm",2);
hardAlgorithm.hardAlgorithm(RedBeltNinja)
RedBeltNinja.showStats();
//!=======================Turn 2========================
const BlackBeltNinja = new Unit ("Black Belt Ninja",4,5,4);
const unhandledPromiseRejection= new Card ("Unhandled Promise Rejection",1);
unhandledPromiseRejection.unhandledPromiseRejection(RedBeltNinja);
RedBeltNinja.showStats();
//!=======================Turn 3========================
const pairProgramming = new Card ("pairProgramming",3);
pairProgramming.pairProgramming(RedBeltNinja);
RedBeltNinja.showStats();
RedBeltNinja.attack(BlackBeltNinja);
BlackBeltNinja.showStats();





