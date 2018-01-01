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
    age: 40,
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

// database.ref().set('this is my data');

//database.ref('age').set(27);
//database.ref('location/city').set('New York');

database.ref('attributes').set({
    height: 170,
    weight: 70
}).then( () => {
    console.log('Update works');
}).catch( (e) => {
    console.log('Update failed.', e);
});;

// attributes
//  height
//  weight