// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Vw_ANTEylWpH9kPymTkW4S7en-45r04",
  authDomain: "bingebot-1cf35.firebaseapp.com",
  projectId: "bingebot-1cf35",
  storageBucket: "bingebot-1cf35.firebasestorage.app",
  messagingSenderId: "687304622457",
  appId: "1:687304622457:web:1fa4d5a1ed192c26202fa8",
  measurementId: "G-64CKZW0SS0"
};




// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//  const analytics = getAnalytics(app);

 
export const auth = getAuth(app);