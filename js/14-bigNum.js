function didziausiasSkaiciusSarase(list) {
    // VALIDATION
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
    }
    if (list.length === 0) {
        return 'ERROR: sarasas negali buti tuscias'
    }

    // login
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        // Inner validation
        if (typeof number !== 'number' || !isFinite(number)) {
            continue; // permeta for`a i sekancia ciklo iteracija
        }
        //  inner logic
        if (number > biggestNumber) {
            biggestNumber = number;
        }
        
    // result validation
    }
    if (biggestNumber === -Infinity) {
        return 'Error: sarase nera nei vieno normalaus skaiciaus'
    }
    // result return
    return biggestNumber;
};
console.log( didziausiasSkaiciusSarase('pomidoras'), '-->', 'pateikta netinkama tipo reiksme');
console.log( didziausiasSkaiciusSarase([]),'-->', 'Sarasas negali buti tuscias');
console.log( didziausiasSkaiciusSarase([5]), '-->', 5);
console.log( didziausiasSkaiciusSarase([1, 2, 3]), '-->', 3);
console.log( didziausiasSkaiciusSarase([1, 3, 2]), '-->', 3);
console.log( didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]), '-->', 75);
console.log( didziausiasSkaiciusSarase([69, 69, 69, 69, 66]), '-->', 69);
console.log( didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
console.log( didziausiasSkaiciusSarase(['x', 1, 2, 3]), '-->', 3);

console.log( didziausiasSkaiciusSarase(['x']), '-->', 'ERROR');
console.log( didziausiasSkaiciusSarase(['x', true, [], -Infinity, Infinity]), '-->', 'ERROR');
console.log( didziausiasSkaiciusSarase([true, -1]), '-->', -1);