// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgqiS7UL2l_zi0a64fr2pKXTdCT4TML-k",
  authDomain: "binge-f65e6.firebaseapp.com",
  projectId: "binge-f65e6",
  storageBucket: "binge-f65e6.firebasestorage.app",
  messagingSenderId: "495824584810",
  appId: "1:495824584810:web:886a84b8193c3b165aca13",
  measurementId: "G-1SB961L9WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)



