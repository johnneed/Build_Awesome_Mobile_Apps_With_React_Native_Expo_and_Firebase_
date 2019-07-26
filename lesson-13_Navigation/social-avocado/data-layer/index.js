import firebase from 'firebase';
import 'firebase/firestore';
import config from './config'
import * as actions from './actions';

// Kicking off our connection to Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


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



/**
 *
 * @param dispatch
 * @returns {Promise<void>}
 */
async function initialize(dispatch){


    const user = firebase.auth().currentUser;

    if (user) {
        dispatch(actions.userLoggedIn(user));
    }

    // TODO: Check for cached data here.

    /** Setup Listeners : Don't return listeners **/
    firebase
        .auth()
        .onAuthStateChanged((user) => {
            if (!!user) {
                dispatch(actions.userLoggedIn(user));
            } else {
                dispatch(actions.userFailedLogIn());
            }
        });

    /** ADD YOUR INIT FUNCTIONS HERE. ASYNC OPS SHOULD BE ADDED TO THE RETURNED PROMISE.ALL **/

    const FOO = new Promise((resolve) => {
        setTimeout(() => resolve(true), 2000);
    });

    return Promise.all([FOO]);
}

/**
 *
 * @param _email
 * @param password
 * @returns {Promise<firebase.auth.UserCredential | never>}
 */
function loginWithEmailPassword(_email, password) {
    return firebase
        .auth()
        .signInWithEmailAndPassword(_email, password)
        .catch(error => {
            throw error; // Rethrow so we can deal with error later too.
        });
}

/**
 *
 * @param emailAddress
 * @returns {Promise<void>}
 */
function resetPassword(emailAddress) {
    return firebase.auth().sendPasswordResetEmail(emailAddress);
}

/**
 *
 * @returns {Promise<void>}
 */
function logout() {
    return firebase.auth().signOut();
}


