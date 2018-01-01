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

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

/* 
database.ref('isSingle')
    .remove()
    .then( () => {
        console.log('isSingle was removed.');
    }).catch( (e) => {
        console.log('gnaaaaa... : ', e);
    });
 */ 