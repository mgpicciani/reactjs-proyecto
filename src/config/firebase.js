// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1il0WnVppdgzKwp9J-KPqgkH5SjKX-6o",
  authDomain: "proyecto-react-1-cc939.firebaseapp.com",
  projectId: "proyecto-react-1-cc939",
  storageBucket: "proyecto-react-1-cc939.appspot.com",
  messagingSenderId: "874285745407",
  appId: "1:874285745407:web:b911808719e7bd540d78ca",
  measurementId: "G-MJFJJYCXWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default { db }
