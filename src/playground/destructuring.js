const log = console.log;
/////////////////////////////////////////////
// Object destructuring
/////////////////////////////////////////////

/* const person = {
    //name: 'Isabel',
    age: 37,
    location: {
        city: 'Düsseldorf',
        temp: 2
    }
};

log(`${person.name} is ${person.age} years old`);
// destructuring person means for example:
// set direct default values
const { name = 'Anonymus', age } = person;
log(`${name} is ${age} years old`);
//renaming keys
const { temp: temperatur, city } = person.location;
log(`In ${city} it is ${temperatur} degree.`);
 */
 const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
 };
const { name : pName = 'Self-Publisher' } = book.publisher 
// CHALLENGE 88.1
log(pName); // Penguin - default Self-Publisher

/////////////////////////////////////////////
// Array destructuring
////////////////////////////////////////////
const address = ['Wilseder Weg 54', 'Düsseldorf', 'NRW', '40468'];
log(address);
const [street, city, state, plz] = address;
console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city} ${state}.`);

const [, ,stateOnly = 'Unknown'] = address;
log(stateOnly);

// CHALLENGE 88.2
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
//grab first and third item using array destructering 
const [name = 'Drink', , price] = item;
log('A medium Coffee (hot) costs $2.50');
log(`A medium ${name} costs ${price}`);









