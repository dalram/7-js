/*
IF

Sablonai:
if () {}
if () {} else {}
if () {} else if {} else {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}

Palyginimo operatoriai:
- visi >, <, <=, >=, ==, !=, grieztos lygybes ===, gieztos nelygybes !==
- naudotini >, <, <=, >=, grieztos lygybes ===, gieztos nelygybes !==
- NEnaudotini !=, ==
*/
const a = 7;
const b = 9;

if (a > b) {
    console.log("A yra daugiau uz B");
} else {
    console.log("B daugiau uz A");
}
const day = 1;
if (day === 1) {
    console.log('Pirmadienis');
} else if (day === 2) {
    console.log('Antradienis');
} else if (day === 3) {
    console.log('Treciadienis');
} else if (day === 4) {
    console.log('Ketvirtadienis');
} else if (day === 5) {
    console.log('Penktadienis');
} else if (day === 6) {
    console.log('Sestadienis');
} else if (day === 7) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja');
}

// Nestinimas

console.log('---------------');

const akiuSpalva = 'zalia';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Melynakiai megsta melynes');
    } else {
        if  (akiuSpalva === 'ruda') {
            console.log('Rudaakiai yra melagiai');
        } else {
            if (akiuSpalva === 'raudona'){
                console.log('Raudonakis?.. tu turbut programuotojas');
            } else {
                console.log('O tu turi akis?..');
            }
        }
    }

}

console.log('---------------');

const temp = -25;
const nuoKadaSilta = 15;
const arYraKrituliu = false;

if (arYraKrituliu === true) {
    if (temp >= nuoKadaSilta) {
        console.log('Varyk su maike');
    } else {
        console.log('Tau reikes kailiniu');
    } 
} else {
        if (temp >= nuoKadaSilta) {
            console.log('gali eiti nuogas');
        }
        else {
            console.log('be striukes neapseisi');
        } 
}


console.log('---------------');

