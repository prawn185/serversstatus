import React, {Component} from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiHxZL6-NmUnmuGx1YWQ9v9djMXGYbeC4",
    authDomain: "serverchecker-88404.firebaseapp.com",
    projectId: "serverchecker-88404",
    storageBucket: "serverchecker-88404.appspot.com",
    messagingSenderId: "644683023380",
    appId: "1:644683023380:web:d2f00720d9d2e3b7019301",
    measurementId: "G-DVLCE77NLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
