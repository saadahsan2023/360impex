// Import necessary functions from Firebase SDK
import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAec6BkZaZ0hIw2IqQxTYq8BnmAbnvQ2w8",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "impex-b3665.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "impex-b3665",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "impex-b3665.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "129256767552",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:129256767552:web:6ca8a853ad7dc418405fa5",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-PETFFCZCJ3",
};

// Initialize Firebase App
let app;
try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log('Firebase app initialized successfully');
  } else {
    app = getApp();
    console.log('Firebase app already initialized');
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}

// Initialize Realtime Database
const database = getDatabase(app);
console.log('Realtime Database instance created:', database);

// Export the database instance
export { database };