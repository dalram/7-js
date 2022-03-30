/*
Numbers:
normalus:
    - sveikieji
    - desimtainiai
nenormalus:
    - NaN (not a number)
    - Infinity; -Infinity

Operatoriai:
++
--
+=, -=, /=, *=, %= - savo reiksmes pakeitimas
*/
const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;

console.log('------------');
console.log(7 + "5");
console.log(7 - "5");
console.log(7 * "5");
console.log(7 / "5");

// + turi dvi operacijas, gali sumuoti ir sujungti. + vienintelis nekonvertuoja stringu i skaicius
console.log('num; true');
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);

console.log('num; false');
console.log(7 + false);
console.log(7 - false);
console.log(7 * false);
console.log(7 / false);

console.log('true; num');
console.log(true + 5);
console.log(true - 5);
console.log(true * 5);
console.log(true / 7);

console.log('false; num');
console.log(false + 5);
console.log(false - 5);
console.log(false * 5);
console.log(false / 5);

console.log('------------');
console.log(2**4); // kelti laipsniu
console.log(7 % 2); // % yra liekada po dalybos
console.log(13 % 5); // liekana 3

console.log('-------------');
let pinigineAfter = 0;
console.log('Pinigine:', pinigineAfter++); // prideda po panaudojimo kintamojo
console.log('Pinigine:', pinigineAfter++);


console.log('-------------');
let pinigineBefore = 0;
console.log('Pinigine:', ++pinigineBefore); // prideda pries panaudojima kintamojo
console.log('Pinigine:', ++pinigineBefore);

console.log('-------------');
let skolaAfter = 0;
console.log('Skola:', skolaAfter--); // atima po panaudojimo kintamojo
console.log('Skola:', skolaAfter--);


console.log('-------------');
let skolaBefore = 0;
console.log('skola:', --skolaBefore); // atima pries panaudojima kintamojo
console.log('skola:', --skolaBefore);


console.log('-------------');
let b = 0;
b = b + 3;
console.log(b);
b = b + 3;
console.log(b);
console.log('-------------');
let c = 16;
const d = 2;
c/=d;
console.log(c);
c/=d;
console.log(c);
c/=d;
console.log(c);