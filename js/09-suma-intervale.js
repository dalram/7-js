function sumaIntervale (a, b) {
    let forSuma = 0;
    for (let i = a; i <= b; i++) {
        forSuma += i;
    }
    return forSuma;
}

console.log(sumaIntervale(0, 0), '-->', 0);
console.log(sumaIntervale(0, 4), '-->', 10);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(574, 815), '-->', 'kazkoks didelis teigiamas :D');
console.log(sumaIntervale(-50, 50), '-->', 0);
console.log(sumaIntervale(-70, 30), '-->', -2020);