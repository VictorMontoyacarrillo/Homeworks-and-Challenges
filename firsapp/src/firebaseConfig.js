// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6QjPXBtcrIzqNDDEQxzo5Ze1r6LOWJ8M",
  authDomain: "ejercicio-06-c73fb.firebaseapp.com",
  projectId: "ejercicio-06-c73fb",
  storageBucket: "ejercicio-06-c73fb.appspot.com",
  messagingSenderId: "107540998901",
  appId: "1:107540998901:web:dc34eb00daf09c0c6b73bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
