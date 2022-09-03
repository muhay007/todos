// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYt4WzXSXcZzqe7g1mAe5L8VPjHy2Pq0w",
  authDomain: "todo-657a9.firebaseapp.com",
  projectId: "todo-657a9",
  storageBucket: "todo-657a9.appspot.com",
  messagingSenderId: "508002040072",
  appId: "1:508002040072:web:58cfa74e951d052a8ed4bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
