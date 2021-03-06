import * as firebase from 'firebase';

const config = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.FIREBASE_DATABASE_URL,
projectId: process.env.FIREBASE_PROJECT_ID,
storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
// Getting firebase
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

/*
const idToBeUpdated = '-L1oYGym13j3kTJSQt2s';
database.ref(`expenses/${idToBeUpdated}`).once('value')
    .then( (snapshot) => {
        console.log('from db: ', snapshot.val()); 
    });
*/

/* 
// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
 */

/* 
database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach( (childSnapshot) => {
            expenses.push({
                id : childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });
 */

/* 
database.ref('expenses')
    .once('value')
    .then( (snapshot) => {
        console.log(snapshot.val());
        const expenses = [];

        snapshot.forEach( (childSnapshot) => {
            expenses.push({
                id : childSnapshot.key,
                ...childSnapshot
            });
        });
        console.log(expenses);
        
    });
 */

/* 
database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createAt: 0 
});
 */

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