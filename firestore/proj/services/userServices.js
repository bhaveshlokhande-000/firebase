
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = require("./firebaseConfig.json");
firebase.initializeApp(firebaseConfig)

function getInstance() {
    return firebase
}

function getCurrentUser() {
    const user = firebase.auth().currentUser;
    return user
}

async function createUser(email, password, name) {
    let userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password)
    let user = userCredentials.user
    await firebase.auth().currentUser.updateProfile({
        displayName: name,
        photoURL: ""
    });
    return user
}

module.exports = {
    getCurrentUser,
    createUser,
    getInstance
}