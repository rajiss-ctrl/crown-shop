import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
apiKey: "AIzaSyBsVcvNFPfDF6QoyCSuLZbXUoRNw7Fwyzc",
authDomain: "crown-shop-c756e.firebaseapp.com",
projectId:"crown-shop-c756e",
storageBucket:"crown-shop-c756e.appspot.com",
messagingSendeId:"807174488727",
appId:"1:807174488727:web:dd42f716bd3ff808c1dfd2",
measurementId:"G-YV5NVSQBFV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle =()=> auth.signInWithPopup(provider);

// var provider = new firebase.auth.GoogleAuthProvider();
export default firebase;