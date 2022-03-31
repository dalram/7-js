const pazymiai = [10, 2, 8, 4, 6];
let suma = 0;
//  skaiciuojam pazymiu vidurki
// for greiciausias ir efektyviausias ciklas(loop), kiti naudojami del patogumo naudoti.
// LOOPS: for, while, for-in, for-of, foreach, ...
for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    console.log(pazymys);
    suma += pazymys;
    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}

console.log('Galutine suma:' , suma);
const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);