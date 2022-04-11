const marks = [2, 8, 4, 6, 10];
console.log(marks.reduce((total, item) => total + item, 0));


const labas = 'Labas rytas, Lietuva!';
console.log(labas.replace('rytas', 'vakaras'));

const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(minMax));
console.log(Math.max(minMax));
console.log(Math.max(...minMax));
console.log(Math.min(...minMax));
console.log(...minMax);


function getDrinkByProfession(param){
    const input = ["Jabroni", "School Counselor"	,"Programmer",
      "Bike Gang Member", "Politician", "Rapper"];
    const output = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer",
          "Moonshine", "Your tax dollars", "Cristal", "Beer"];
  
    for (let i = 0; i < input.length; i++)
    {
      if (param.toLowerCase() === input[i].toLowerCase()) {
      return output[i];
    }
      if (param.toLowerCase() !== input[i].toLowerCase()) {
      return output[6];
    }
    
  }
}


function tripleTrouble(one, two, three){
    let output = '';
    for (let i = 0; i < one.length; i++) {
      output = one[i] + two[i] + three[i];
    }
    return output;
   }

   console.log(tripleTrouble('aa', 'bb', 'cc'));


   console.log('Labas rytas, Lietuva!'.split(' ').reverse().toString().replace(/,/gi, ' '));
   console.log('================================');

   function reverseWords(str){
  
    return str.split(' ').reverse().toString().replace(/,/gi , ' '); // reverse those words
  }
  const rytas = ['Labas', 'rytas', 'Lietuva'];
  console.log(rytas.join(' '));

  console.log('================================');
  function createPhoneNumber(numbers){
    let phoneNumber = '';
    for (let i = 0; i < numbers.length; i++) {
          const number = numbers[i];
          phoneNumber += number;
    }
    return `(${phoneNumber[0] + phoneNumber[1] + phoneNumber[2]}) ${phoneNumber[3] + phoneNumber[4] + phoneNumber[5]}-${phoneNumber[6] + phoneNumber[7] + phoneNumber[8] + phoneNumber[9]}`;
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


  console.log(Math.floor( 1500 / 500) * 500);

  console.log(Math.floor(1500 / 500) + Math.floor((1500 % 500) / 200));

  console.log('================================');

console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item <= 5));

console.log('================================');
function magNumber(info){
    const weapons = {
      PT92: 17,
      M4A1: 30,
      M16A2: 30,
      PSG1: 5
    }
    return Math.ceil(info[1] * 3 /  weapons[info[0]]);
  }
  