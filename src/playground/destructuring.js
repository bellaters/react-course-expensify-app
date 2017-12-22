const log = console.log;
log('running');

const person = {
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

