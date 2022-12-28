import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBD2HI-3aglNqpEwKwBDNf_pzHD-TC3yo",
  authDomain: "tasks-management-app-852a6.firebaseapp.com",
  projectId: "tasks-management-app-852a6",
  storageBucket: "tasks-management-app-852a6.appspot.com",
  messagingSenderId: "494934043202",
  appId: "1:494934043202:web:f0913ed7f04d3466dadbdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
