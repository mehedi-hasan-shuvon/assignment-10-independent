// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4Br8r4dVVy0wJbxJjxSfiBJqnUImu_UQ",
    authDomain: "assignment-10-tutor-master.firebaseapp.com",
    projectId: "assignment-10-tutor-master",
    storageBucket: "assignment-10-tutor-master.appspot.com",
    messagingSenderId: "663488319528",
    appId: "1:663488319528:web:2bcc25bc27f15d1569e51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;