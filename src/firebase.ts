import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const googleProvider = new GoogleAuthProvider();

export const signIn = () => signInWithPopup(auth, googleProvider);
export const logOut = () => signOut(auth);

const genAI = new GoogleGenerativeAI((import.meta as any).env.VITE_GEMINI_API_KEY);
export const aiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });