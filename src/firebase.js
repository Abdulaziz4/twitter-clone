import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAq-HM39TClQT9x0lJ34vFFAR_zBjKjrDw",
  authDomain: "twitter-clone-ef8e6.firebaseapp.com",
  projectId: "twitter-clone-ef8e6",
  storageBucket: "twitter-clone-ef8e6.appspot.com",
  messagingSenderId: "283125007718",
  appId: "1:283125007718:web:fb3f74fddc846fc2d5b4a7",
};

const app = initializeApp(firebaseConfig);

const db = app.firestore();

export default db;
