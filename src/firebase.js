import firebase from 'firebase/app'

let firebaseConfig = {
    apiKey: "AIzaSyA99DNOU2FhIpUilzUUe3r9N7yF1dUlFaE",
    authDomain: "todoist-7ce6b.firebaseapp.com",
    projectId: "todoist-7ce6b",
    storageBucket: "todoist-7ce6b.appspot.com",
    messagingSenderId: "251656888628",
    appId: "1:251656888628:web:22139bf31efefed20f8561"
};

const firebaseI = firebase.initializeApp(firebaseConfig);

export {firebaseI as firebase}