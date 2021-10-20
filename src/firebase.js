import "firebase/firestore";
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq-HM39TClQT9x0lJ34vFFAR_zBjKjrDw",
  authDomain: "twitter-clone-ef8e6.firebaseapp.com",
  projectId: "twitter-clone-ef8e6",
  storageBucket: "twitter-clone-ef8e6.appspot.com",
  messagingSenderId: "283125007718",
  appId: "1:283125007718:web:fb3f74fddc846fc2d5b4a7",
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore();

export { app, db };
