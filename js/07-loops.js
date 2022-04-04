const pazymiai = [10, 2, 8, 4, 6];
let sumaFor = 0;
//  skaiciuojam pazymiu vidurki
// for greiciausias ir efektyviausias ciklas(loop), kiti naudojami del patogumo naudoti.
// LOOPS: for, while, for-of, foreach, ...
// OBJECT-LOOP: for-in
for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymys = pazymiai[i1];
    console.log(pazymys);
    sumaFor += pazymys;
    console.log(`${i1}) pazymys ${pazymys} [${sumaFor}]`);
}

console.log('Galutine suma:' , sumaFor);
const vidurkis = sumaFor / pazymiai.length;
console.log('Vidurkis:', vidurkis);

console.log('-------------');

for (let i = -80; i<-60; i++) {
    console.log(i);
}

// While (tol kol tenkinsi salyga)
let sumaWhile = 0;
let i2 = 0;
while(i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    console.log(pazymys);
    sumaWhile += pazymys;
    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;
}

// For-of
console.log('-------------');
let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOf}]`);
}

// FOREACH
console.log('-------------');
// let sumaForEach = 0;
// pazymiai.forEach((pazymys, i4, pazymiaiRef) => {
//     console.log(pazymys, i4, pazymiaiRef);

// }) 

let sumaForEach = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach}]`);

});




