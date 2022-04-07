/*
Number methods
*/
// skaiciaus konvertavimas i stringa
console.log((5215).toString());
console.log('' + 5215);
// desimtaines dalies nukirpimas
console.log((3.1415).toFixed(3)); // skaiciai po kablelio ir dar grazina stringa
console.log(typeof (3.1415).toFixed(3));

// is teksto konvertavimas i skaiciu
console.log(parseFloat('17.53'));
console.log(typeof parseFloat('17.53'));
console.log(parseInt('17.53'));
console.log(+'17.53'); // casting
console.log(parseFloat('labas'));
console.log(parseInt('labas'));
console.log(+'labas'); // esant stringui prie skaiciaus visada grazins NaN

console.log('------------------');
console.log('Math class');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.abs(-7)); // neigiamus pavercia teigiamais
console.log('Apvalinimas');
console.log(Math.round(1.5)); // matematiskai apvalina
console.log(Math.floor(1.6)); // i mazesne puse 
console.log(Math.ceil(1.4)); // i didesne puse
console.log('random skaicius: nuo 0 included iki 1 excluded');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log('Min-max');
console.log(Math.min(1, 3, 4, 6, 7));
console.log(Math.max(1, 3, 4, 6, 7)); // negalime duoti masyvo, tai turi buti pavieniai skaiciai
console.log(Math.trunc(4.99999));
/*
String methods
*/
const labas = 'Labas rytas, Lietuva!';
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('String methods');
console.log('Labas rytas, Lietuva!'.length);
console.log('ar stringe yra kitas sub-string');
console.log('Labas rytas, Lietuva!'.includes('o'));
console.log('kur stringe yra kitas sub-string');
console.log('Labas rytas, Lietuva!'.indexOf('y'));
console.log('Labas rytas, Lietuva!'.indexOf('rytas'));
console.log('Labas rytas, Lietuva!'.indexOf('x')); // jei neranda indefOf atsakymas bus -1
console.log('Labas rytas, Lietuva!'.indexOf('L')); // randa pati artimiausia varianta
console.log('Labas rytas, Lietuva!'.indexOf('L', 1));
console.log('"sukarpyti" stringa i dalis');

console.log('Labas rytas, Lietuva!'.split(' '));
console.log('Labas rytas, Lietuva!'.split('a'));
console.log('Labas rytas, Lietuva!'.split('!'));
console.log('Labas rytas, Lietuva!'.split('L'));
console.log('Kartojimas');

console.log('a'.repeat(20) + '!');
console.log('Labas rytas, Lietuva!'[2]);
console.log('Labas rytas, Lietuva!'.charAt(2));
console.log('Labas rytas, Lietuva!'.slice(6, 11));
console.log('teksto konvertavimas');
console.log(labas.toLowerCase());
console.log(labas.toUpperCase());
console.log('teksto "apvalymas" nuo tarpu');
console.log('    Labas    rytas!    '.trimStart() + '.'); // istrina tarpus
console.log('    Labas    rytas!    '.trimEnd() + '.');
console.log('    Labas    rytas!    '.trim() + '.');
console.log('replace');
console.log(labas.replace('rytas', 'vakaras'));
console.log(labas.replace('a', '_')); // replace dirba tik 1 karta
console.log(labas.replaceAll('a', '_'));
console.log(labas.replace(/a/gi, '_'));
/*
Boolean methods
*/
console.log('------------------');
console.log(true.toString());

/*
Array methos
*/
console.log('------------------');
console.log('------------------');

const rytas = ['Labas', 'rytas', 'Lietuva'];
console.log(rytas.length);
console.log('Sujungti');
console.log(rytas.join(', '));
console.log('paieska');
console.log(rytas.includes('Rytas'));
console.log(rytas.indexOf('a'));
console.log(rytas.indexOf('Labas'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.indexOf('Lietuva'));

console.log(rytas.push('PUSH'));
console.log(rytas);
console.log(rytas.unshift('UNSHIFT'));
console.log(rytas);
console.log(rytas.pop());
console.log(rytas);
console.log(rytas.shift('UNSHIFT'));
console.log(rytas);
console.log('Extra');
console.log(rytas.reverse());

// map, filter, sort, reduce, every, flat, forEach
console.log('map - individualiu reiksmiu konvertavimas');
const marks = [2, 8, 4, 6, 10]
console.log(marks.map(item => item));
console.log(marks.map(item => 2* item));
console.log(marks.map(daiktas => daiktas % 3));
console.log(marks.map(daiktas => daiktas - 0.5));

console.log('Filter - atrinkimas reiksmiu');
console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item <= 5));
console.log(marks.filter(item => item > 5 && item % 3 === 0));

console.log('reduce - sutraukia visas reiksmes i viena reiksme');
console.log(marks.reduce((total, item) => total + item, 0));
console.log(marks.reduce((total, item) => total + item));
console.log(marks.reduce((total, item) => total * item, 1));
console.log(marks.reduce((total, item) => total * item));
console.log(marks.reduce((total, item) => total - item, 0));
// 0 - 10 - 2 - 8 - 4 - 6
console.log(marks.reduce((total, item) => total - item));
// 10 - 2 - 8 - 4 - 6 nes pradeda nuo pirmo array elemento jei nera nurodyta pradine reiksme
console.log(marks.reduce((total, item) => total / item, 0));
console.log(marks.reduce((total, item) => total / item));

console.log('sort - ');
const nums = [1, 2, 3, 10, 20, 30, 11, 21, 31];
console.log(marks.sort()); // tarsi lygintu tekstus
console.log([1, 2, 3, 10, 20, 30].sort());
console.log(nums.sort());
console.log('------------------');
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));
console.log('------------------');
const texts = ['asd', 'qw', 'asdas', 's'];
console.log(texts.sort());
console.log(texts.sort().reverse());
console.log(texts.sort((a, b) => a.length - b.length));
console.log(texts.sort((a, b) => b.length - a.length));

console.log('flat - sutraukia gylius masyvus i viena');
const matrix = [
    [1, 2, [7, 8]],
    [11,[9, 10], 22],
    [[11, 12], 3, 4],
]
console.log(matrix.flat());
console.log(matrix.flat(2)); // skaicius nurodo masyvo gyli.

console.log('... - spread operator');
console.log(Math.min(1, 5, 7, -4, 10));
console.log(Math.max(1, 5, 7, -4, 10));
const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(minMax));
console.log(Math.max(minMax));
console.log(Math.min(...minMax));
console.log(Math.max(...minMax));

const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];
const m123 = [...m1, ...m2, ...m3];
const m132 = [...m1, ...m3, ...m2];
const m321 = [...m3, ...m2, ...m1];
console.log(m123);
console.log(m132);
console.log(m132.reduce((a, b) => a + b));
console.log(m321);


/*

Object methods
*/
console.log('------------------ Objects');
const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
}
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);
console.log('automatinis visu objekto raktazodziu istraukimas');
const personKeys = Object.keys(person);
console.log(personKeys);

console.log('automatinis visu objekto reiksmiu istraukimas');
for (const key of personKeys) { // kai naudojamas for of turi buti masyvas
    console.log(key, ':', person[key]); // dinaminis reiksmiu istraukimas is object
}

console.log('FOR-IN - veikia tik su objektais!!!!'); 
for (const key in person) {
    console.log(key, ':', person[key]);
}

console.log('... - spread operator (naudojimas objekte)');
console.log({...person, car: 'Tesla'}); //gaunasi objekto kopija, bet turime ideti i lauztinius skliaustus
console.log({color: 'red', ...person});
console.log({...person, isMarried: false});
console.log({isMarried: false, ...person, });

const objA = {
    a: 'a',
    c: 'c',
    b: 'bbbbbbb'
}
const objB = {
    b: 'b',
    d: 'd'
}
const objAB = {...objA, ...objB}
console.log(objAB);

// Ka ... - spread operatorius duoda funkciju bloke???? 
/*
DESTRUCTURING - destrukturizavimas (pasiziureti kodo pvz funkcijose!!!!!)
*/
console.log('------------------');
console.log('------------------');
console.log('------------------');

const skaiciai = [10, 2, 8, 6, 4, 8, 6, 4, 8, 6, 4];
const pirmasSkaicius = skaiciai[0];
const antrasSkaicius = skaiciai[1];
const treciasSkaicius = skaiciai[2];
console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

const [pirmas, antras, trecias, ...kita] = skaiciai;
console.log(pirmas, antras, trecias, kita);

const skaiciai2 = [9999];
const [xx1, ...xxx] = skaiciai2;
console.log(xx1, xxx);

const car = {
    name: 'Tesla',
    model: 'X',
    color: 'red'
}
const carName = car.name;
const carModel = car.model;
const carColor = car.color;
console.log(carName, carModel, carColor);
const { name, color, model} = car;
console.log(name, color, model);

console.log('------------------');
console.log('------------------');
console.log('------------------');

const random = Math.floor(Math.random() * 10); // [0, 9]
console.log(random);

function randomNumber(nuo = 0, iki = 9) {
    return nuo + Math.floor(Math.random() * (iki - nuo + 1));
}

const nuo = 10;
const iki = 19;
const randomNuoIki = nuo + Math.floor(Math.random() * (iki - nuo + 1));
console.log(randomNuoIki);
for (let i = 0; i < 10; i++) {
    
    console.log(randomNumber(0, 10));
}