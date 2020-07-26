import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCP9b-w7ml7NsFbY-PG17vQLZaNtePVL3c",
  authDomain: "olios-furniture-f502c.firebaseapp.com",
  databaseURL: "https://olios-furniture-f502c.firebaseio.com",
  projectId: "olios-furniture-f502c",
  storageBucket: "olios-furniture-f502c.appspot.com",
  messagingSenderId: "226336448812",
  appId: "1:226336448812:web:4e3306f9105396a5968c89",
  measurementId: "G-YLTML2WCF8",
};
firebase.initializeApp(config);

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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //add to fireStore
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const addSlidersAndDocuments = async (slidersKey, objectsToAdd) => {
  //add to fireStore
  const slidersRef = firestore.collection(slidersKey);
  console.log(slidersRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = slidersRef.doc();
    console.log(obj);

    console.log(newDocRef);

    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  // get collection from fireStoe
  const transFormedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { items } = docSnapshot.data();

    return {
      items,
    };
  });

  return transFormedCollection.reduce((accumulator, collection) => {
    accumulator[collection.items] = collection;
    return accumulator;
  }, {});
};

export const convertSlidersSnapshotToMap = (slidersSnapshot) => {
  // get collection from fireStoe
  const transFormedSliders = slidersSnapshot.docs.map((docSnapshot) => {
    const { sliders } = docSnapshot.data();

    return {
      sliders,
    };
  });

  return transFormedSliders.reduce((accumulator, slider) => {
    accumulator[slider.sliders] = slider;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
