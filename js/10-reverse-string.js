function reverseString (text) {
    const a = text.length -1
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const position = a - i;
        const letter = text[position];
        reverse += letter;
    }
    return reverse;
}

console.log(reverseString('abc'), '-->', 'cba');
console.log(reverseString('labas'), '-->', 'sabal');
console.log(reverseString('sula'), '-->', 'alus');
console.log('-------------------------');
function reverseString2(text) {
    let reverse = '';

    for (let i=0; i<text.length; i++) {
        reverse = text[i] + reverse;

    }
    return reverse;
}

console.log(reverseString2('abc'), '-->', 'cba');
console.log(reverseString2('labas'), '-->', 'sabal');
console.log(reverseString2('sula'), '-->', 'alus');
console.log('-------------------------');
function reverseString3(text) {
    let reverse= '';
    for (let i=text.length -1; i>=0; i--) {
        reverse += text[i];
    }
    return reverse;
};

console.log(reverseString3('abc'), '-->', 'cba');
console.log(reverseString3('labas'), '-->', 'sabal');
console.log(reverseString3('sula'), '-->', 'alus');