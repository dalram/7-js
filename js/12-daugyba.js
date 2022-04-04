function daugyba(a, b) {
    //  jei a nera skaicius ---> ERROR
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(a)) {
        return 'ERROR: parametras turi buti tikras skaicius';
    }
    // jei b nera skaicius ---> Error
    if (typeof b !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    return a*b;
};
console.log(daugyba(7, 'b'));
console.log(daugyba(7, 5));

console.log(daugyba('', 7));
