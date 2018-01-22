//
// OBJECT DESTRUCTURING
//


// console.log('destructuring');
// const person = {
//     name: 'Daivy',
//     age: 25,
//     location: {
//         city: 'Saint-Nicolas',
//         temp: 92,
//     }
// };

// // const name = person.name;
// // const age = persona.age
// // const { name, age } = person;
// // const { name: firstName = 'Andrew', age} = person; // valeur par défaut de name si pas présetn

// const { city, temp: temperature } = person.location; // temp: temperature permet de renommer


// console.log(`${name} is ${age}`);
// console.log(`${city} is ${temperature}`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    },
};

const { name: publisherName = 'Self-Publish' } = book.publisher;


console.log(publisherName);

//
// Array DESTRUCTURING
//

// const address = ['1299 S Juniper Stree', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address; // array destructuring
// // const [, , state] = address; // marche aussi et ne contienra que state
// const [, , state = 'New York'] = address; // empty item

// console.log(`You are in ${street} ${city}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);
