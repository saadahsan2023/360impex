import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { getDatabase, Database as RealtimeDB } from "firebase/database";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_REALTIME_DATABASE_URL", // Make sure this is correct for Realtime DB
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

let app: FirebaseApp;
if (!getApps().length) { app = initializeApp(firebaseConfig); } else { app = getApp(); }

export const database: RealtimeDB = getDatabase(app); // Export only this for testing
