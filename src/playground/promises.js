const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        /* resolve({
            name: 'Foo Bar',
            age: 40
        }); */
        reject('Something went wrong!');
    }, 2000);
    
});

console.log('before');
promise.then((data) => {
    console.log('1 : ', data);
    return 'my value'
}).then( (data) => {
    console.log('2 : ', data);
}).catch( (error) => {
    console.log('error: ', error);
});
console.log('after');
