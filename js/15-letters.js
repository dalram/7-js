function isrinktiRaides(text, step) {
    // rasant validacijas is pradziu patikrinam pirma kintamaji, po to antras
    // text testai
    if (typeof text !== 'string') {
        return 'ERROR: Pirmasis kintamasis yra netinkamo tipo'
    }
    if (text === '') {
        return 'ERROR: Tekstas negali buti tuscias'
    }
    // step testai
    if (typeof step !== 'number') {
        return 'ERROR: zingsnis yra netinkamo tipo'
    }
    if (!isFinite(step)) {
        return 'ERROR: zingsnis turi buti tikras skaicius'
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius'
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti 0'
    }
    if (step > text.length) {
        return 'ERROR: zingsnis negali buti didesnis uz teksto ilgi'
    }

    let raides = '';
    if (step > 0) {
        for (let i = step - 1; i < text.length; i+=step) {
            const raide = text[i];
            console.log(i, raide);
            raides += raide;
        }
    } else {
    for (let i = text.length + step; i >= 0; i+=step) {
        const raide = text[i];
        console.log(i, raide);
        raides += raide;
        }
    }
    return raides;
}
// console.log(isrinktiRaides(1561, 2 ), '-->', 'ERROR: ' );
// console.log(isrinktiRaides('labas', 'iki'), '-->', 'ERROR: ' );
// console.log(isrinktiRaides('labas', NaN), '-->', 'ERROR: ' );
// console.log(isrinktiRaides('labas', -Infinity), '-->', 'ERROR: ' );
// console.log(isrinktiRaides('labas', 1.1111), '-->', 'ERROR: ' );
// console.log(isrinktiRaides('abc', 0 ), '-->', 'ERROR: '  );
// console.log(isrinktiRaides('abc', 4 ), '-->', 'ERROR: '  );
// console.log(isrinktiRaides('', 2));
console.log('------------');
console.log(isrinktiRaides('abcdefg', 2), ' -->', 'bdf');
console.log(isrinktiRaides('abcdefghijkl', 3 ), ' -->', 'cfil' );
console.log(isrinktiRaides('abcdefghijkl', 4 ) );
console.log('------------');
console.log(isrinktiRaides('abcdefg', -2), ' -->', 'bdf');
// console.log(isrinktiRaides('abcdefghijkl', -3 ), ' -->', 'cfil' );
// console.log(isrinktiRaides('abcdefghijkl', -4 ) );

