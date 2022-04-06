/*
CLASSES: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info);
Metodai - funkcionalumas
Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;
*/

function sum(a, b) {
    return a + b;
}

console.log(sum('hi', 'ho'));

function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item;
    }
    return sum / list.length;

}

const rez1 = average([2, 4, 8, 10]);
console.log(rez1);
const rez2 = average([2, 4, 8, 10, 10, 10, 10]);
console.log(rez2);


console.log('--------------');
// pradedam su clasemis
// tai yra aprasas kaip veikia bankomatas
class Bankomatas {
    constructor(street, color) { // metodas
        this.street = street;
        this.color = color;
        this.turnedOn = false;
        this.money = 0; 
    }

    switchOn() {
        this.turnedOn = true;
        console.log(`${this.street}: bankomatas ijungtas`);
    };
    switchOff() {
        this.turnedOn = false;
        console.log(`${this.street}: bankomatas isjungtas`);
    };
    cashIn(money) {
        // jei neijungtas - ERROR
        // jei ne normalus skaicius - ERROR
        // iskaiciuojam pinigus

        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros....');
            return;
        }
        if (typeof money !== 'number' || !isFinite(money)) {
            console.log('Nepanasu i tikra piniga.');
            return;
        }
        if (money <= 0) {
            console.log('Minusiniai pinigai neegzistuoja.');
            return;
        }
        this.money += money;
        console.log(`${this.street}: Inesta ${money} pinigu. `);
        
    };
    cashOut(money){
        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros....');
            return;
        }
        if (typeof money !== 'number' || !isFinite(money)) {
            console.log('Nepanasu i tikra pinigu skaiciu norima issigryninti.');
            return;
        }
        if (money <= 0) {
            console.log('Minusiniai pinigai neegzistuoja.');
            return;
        }
        if (this.money < money) {
            console.log('Bankomate siuo metu nera tokios sumos.');
            return;
        }
        this.money -= money;
        console.log(`${this.street}: Isgryninta ${money} pinigu. `);
    };
    status() {
        console.log(`${this.street}: siuo metu pinigu likutis yra ${this.money}`);
    }
};

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');
bankomatas1.switchOn();
bankomatas2.switchOn();
bankomatas1.cashIn(true);
bankomatas1.cashIn(500);
bankomatas2.cashIn(777);
bankomatas1.cashOut(25);
bankomatas2.cashOut(27);
bankomatas1.status();
bankomatas2.status();
// bankomatas1.cashIn(5);
// bankomatas1.cashOut(9);
// bankomatas1.cashOut(9);
// console.log(bankomatas1.money);