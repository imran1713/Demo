// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import envConfig from "../config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = envConfig;

console.log(firebaseConfig);


// Initialize Firebase
const  app = initializeApp(firebaseConfig);

export default app;