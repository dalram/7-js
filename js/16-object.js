/*
OBJECT
*/
/*

*/
/*
Mokiniai: 
    - vardas, 
    - pazymiai,
    - kontaktinis asmuo 
        - vardas, 
        - tel nr.
*/

// const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];
// const marks = [[10, 8], [10, 7, 4], [10, 6], [10, 5]];
// const contactName = ['P.P', 'M.M', 'J.J', 'O.O'];
// const contactPhone = [111, 222, 333, 444];

// const studentIndex = 0;
// console.log('Vardas', students[studentIndex]);
// console.log('Pazymiai', marks[studentIndex]);
// console.log('Kontaktinio asmens vardas', contactName[studentIndex]);
// console.log('Kontaktinio asmens tel', contactPhone[studentIndex]);

// Visu info masyvu pvz virsuje

/*
Mokiniai (array): 
    - vardas (string)
    - pazymiai (array)
    - kontaktinis asmuo (??)
        - vardas (string)
        - tel nr. (number)
*/ 
// dar vienas sprendimas
// const students = [
//     ['Petras', [10, 6], ['p.p', 111]],
//     ['Maryte', [10, 7], ['m.m', 222]],
//     ['Jonas', [10, 5, 8], ['j.j', 333]],
//     ['Ona', [10, 9], ['o.o', 444]],
// ];
// const index = 3;
// console.log(students[index]);
// const student = students[index];
// const studentName = student[0];
// const studentMarks = student[1];
// const studentContactPerson = student[2];
// const contactName = studentContactPerson[0];
// const contactPhone = studentContactPerson[1];

// console.log('Student name:', studentName);
// console.log('Student marks:', studentMarks);
// console.log('Contact name:', contactName);
// console.log('Contact phone:', contactPhone);

// jei istrintum koki nors kintamaji pvz kaip marytes varda tai nebeveiktu

// Objektai

const students = [
    { 
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    { 
        name: 'Maryte',
        marks: [10, 10],
        contact: {
            name: 'M.M',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    { 
        name: 'Jonas',
        marks: [10, 5],
        contact: {
            name: 'J.J',
            phone: 333,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    { 
        name: 'Ona',
        marks: [10, 7, 3],
        contact: {
            name: 'O.O',
            phone: 444,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 3;
const student = students[studentIndex]; // dirbant su array tik [] skliaustai
const name = student.name; // dirbant su objektais galime dirbti ir su [] ir su .name
const marks = student.marks;
const contact = student.contact;
const contactName = student.contact.name;
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;
console.log(name);
console.log(marks);
console.log(contact);
console.log(contactName);
console.log(contactPhone);

console.log(contactCity);