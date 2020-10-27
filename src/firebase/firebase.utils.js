import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAuyB8udAG6OW5RBhgZsUMLyItWUU0dTYU",
  authDomain: "crwn-shop-fbb88.firebaseapp.com",
  databaseURL: "https://crwn-shop-fbb88.firebaseio.com",
  projectId: "crwn-shop-fbb88",
  storageBucket: "crwn-shop-fbb88.appspot.com",
  messagingSenderId: "711600157876",
  appId: "1:711600157876:web:729a01d2ff2a83f9ebd3e1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }

  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
