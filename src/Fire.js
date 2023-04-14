import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDz4d96eV3eQB-15ul6DuJeTkiYTzlPnL8",
    authDomain: "loginsystem-22977.firebaseapp.com",
    projectId: "loginsystem-22977",
    storageBucket: "loginsystem-22977.appspot.com",
    messagingSenderId: "1040435396388",
    appId: "1:1040435396388:web:fce1eabddb6fdf04627db1",
    measurementId: "G-WDJGW0VY8K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);