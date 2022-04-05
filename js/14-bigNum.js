function didziausiasSkaiciusSarase(list) {
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
    }
    if (list.length === 0) {
        return 'ERROR: Sarasas negali buti tuscias';
    }
    let biggestNumber = list[0];

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    return biggestNumber;
}
console.log( didziausiasSkaiciusSarase('pomidoras'), '-->', 'pateikta netinkama tipo reiksme');
console.log( didziausiasSkaiciusSarase([]),'-->', 'Sarasas negali buti tuscias');

console.log( didziausiasSkaiciusSarase([5]), '-->', 5);
console.log( didziausiasSkaiciusSarase([1, 2, 3]), '-->', 3);
console.log( didziausiasSkaiciusSarase([1, 3, 2]), '-->', 3);
console.log( didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]), '-->', 75);
console.log( didziausiasSkaiciusSarase([69, 69, 69, 69, 66]), '-->', 69);
console.log( didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
