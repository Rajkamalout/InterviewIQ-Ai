
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-b93f1.firebaseapp.com",
  projectId: "fir-b93f1",
  storageBucket: "fir-b93f1.firebasestorage.app",
  messagingSenderId: "582521268452",
  appId: "1:582521268452:web:d83b8dc2f256d3f30764f1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}