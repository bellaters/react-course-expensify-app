import * as firebase from 'firebase';

const config = {
apiKey: "AIzaSyDXIsaMd6uTvn5tHUoOmrxrw2w2_Prs_Kk",
authDomain: "expensify-d4907.firebaseapp.com",
databaseURL: "https://expensify-d4907.firebaseio.com",
projectId: "expensify-d4907",
storageBucket: "expensify-d4907.appspot.com",
messagingSenderId: "1073071908734"
};

firebase.initializeApp(config);
// Getting firebase
const database = firebase.database();

// Setup "expenses" with three items, i.e. push our dummy data to firebase
database.ref('expenses').push({
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 0 
});
database.ref('expenses').push({
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createAt: 0 
});
database.ref('expenses').push({
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createAt: 0
});

/* 
database.ref('location')
    .once('value')
    .then( (snapshot) => {
        const val = snapshot.val();
        console.log('1. ', val);
    })
    .catch( (e) => {
        console.log('Error fetching data');
    });
 */

 /* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log('listen to change: ', snapshot.val());
});

setTimeout( () => {
    database.ref('age').set(24);
}, 2500);

setTimeout( () => {
    database.ref().off('value', onValueChange);
}, 5000);

setTimeout( () => {
    database.ref('age').set(42);
}, 8000);
 */

/* 
database.ref().set({
    name: 'Foo Bar', 
    age: 42,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    isSingle: false,
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then( () => {
    console.log('Data is saved');
}).catch( (e) => {
    console.log('This failed.', e);
});
 */

 /* 
database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
 */

 /* 
database.ref('isSingle')
    .remove()
    .then( () => {
        console.log('isSingle was removed.');
    }).catch( (e) => {
        console.log('gnaaaaa... : ', e);
    });
 */ 