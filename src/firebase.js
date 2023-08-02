import { initializeApp } from "firebase/app";  
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC8YkVuIxdjELMUFxlzFzXCqconCH5nET0",
  authDomain: "chat-cecca.firebaseapp.com",
  projectId: "chat-cecca",
  storageBucket: "chat-cecca.appspot.com",
  messagingSenderId: "724817532951",
  appId: "1:724817532951:web:97901ab92e5424b2242452"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()