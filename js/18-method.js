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
/*
Object methods
*/
