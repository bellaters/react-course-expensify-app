import { resolve } from "path";

const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({
            name: 'Foo Bar',
            age: 40
        });
        //reject('Something went wrong!');
    }, 2000);
    
});

console.log('before');
promise.then((data) => {
    console.log('1 : ', data);

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('This is my other promise');
        }, 2000);
    });
}).then( (data) => {
    console.log('2 : ', data);
}).catch( (error) => {
    console.log('error: ', error);
});
console.log('after');
