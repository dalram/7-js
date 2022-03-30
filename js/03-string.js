/*
STRING:
kabutes:
    -  viengubos
    -  dvigubos // kabutes stringuose geriausia escapint su \ slashu
    -  backtick`as (`)

    Teksto simboliu kiekis: .length
*/
const name = 'Petras';
console.log(name);
const surname = "Petraitis";
console.log(surname);

const viengubaKabute = "viengubos (') ";
console.log(viengubaKabute);

const dvigubaKabute = 'dvigubos (") ';
console.log(dvigubaKabute);

const kabutes12 = 'Cia yra vienguba (\') ir dviguba (") kabutes.';
console.log(kabutes12);

const clientName = 'Maryte';
const clientAge = 55;
// Client Maryte is 55 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const tekstas = 'abcd\\ef';
const tekstoDydis = tekstas.length;
console.log(tekstoDydis);