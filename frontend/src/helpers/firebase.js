import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shopra-online-store.firebaseapp.com",
  projectId: "shopra-online-store",
  storageBucket: "shopra-online-store.firebasestorage.app",
  messagingSenderId: "611250736924",
  appId: "1:611250736924:web:aa97065dbf3a8e30e634d9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };