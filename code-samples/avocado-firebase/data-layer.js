import firebase from 'firebase';
import 'firebase/firestore';

// Get this configuration from the Firebase Console
const config = {
    apiKey: "AIzaSyBY7t5WDzrkadMDn1r8WEM8So7v5oPj9U4",
    authDomain: "avocado-7f336.firebaseapp.com",
    databaseURL: "https://avocado-7f336.firebaseio.com",
    projectId: "avocado-7f336",
    storageBucket: "avocado-7f336.appspot.com",
    messagingSenderId: "993488184580"
};

// Kicking off our connection to Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


// Getting a reference to our 'anonymous' user's document
const docRef = db.collection("users").doc("anonymous");

// This is where ask Firebase to return our document
const fetchAvocados = (callback) => {
    docRef.get().then(function (doc) {
        if (doc.exists) {
            const data = doc.data();
            callback(null, data);
        } else {
            // doc.data() will be undefined in this case
            callback("No such document!");
        }
    }).catch(function (error) {
        callback("Error getting document");
    })
}

// listen for changes to our login state and then try to login anonymously
// We never log out so we don't have to handle that case.
export const loadAvocados = (callback) => {

    firebase.auth().signInAnonymously()
        .then(() => fetchAvocados(callback))
        .catch(function (error) {
            console.log(error);
            callback('Could not log in');
        });

};

// Update Firebase with our new avocados eaten count
export const saveAvocadoCount = (count) => {
    return docRef.set({avocados: count});
};


