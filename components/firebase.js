import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyAKLnKevhkoyi-We0il-FasJ_gli9B5hPc',
    authDomain: 'sulcargas-app-8be05.firebaseapp.com',
    databaseURL: 'https://sulcargas-app-8be05-default-rtdb.firebaseio.com',
    projectId: 'sulcargas-app-8be05',
    storageBucket: 'sulcargas-app-8be05.appspot.com',
    messagingSenderId: '252493067357',
    appId: '1:252493067357:web:53c5a5905c5250cefa49b4',
    measurementId: 'G-MJ0E5D6GKJ',
};

try {
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.firestore();
} catch (e) {
    console.log('O App recarregou');
}

export default firebase;