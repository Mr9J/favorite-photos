// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwgupkVnzNFPhbmfR2WDwPFAHfqsGOok",
  authDomain: "react-auth-846cd.firebaseapp.com",
  projectId: "react-auth-846cd",
  storageBucket: "react-auth-846cd.appspot.com",
  messagingSenderId: "121994698837",
  appId: "1:121994698837:web:725fc137f401d11831f4dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();
