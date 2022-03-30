/*
ARRAY
    prasideda 0
    pozicijos tiks sveikieji skaiciai
    ilgis / irasu kiekis -> .length
*/

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai: ', pazymiai);

// koks pirmas
console.log('Pirmas:', pazymiai[0]);
// koks paskutinis
const pazymiuKiekis = pazymiai.length;
const paskutinioPoz = pazymiuKiekis - 1;
console.log('Paskutinis:', pazymiai[pazymiai.length - 1]);
// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
