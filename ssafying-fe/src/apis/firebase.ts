import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// export const FIREBASE_CLIENT = initializeApp.default;
export default firebaseConfig;
export const fbaseApp = initializeApp(firebaseConfig);
export const fstorage = getStorage(fbaseApp);
// export const STORAGE_CLIENT = FIREBASE_CLIENT.app().storage(
//   "gs://storageUrl.appspot.com"
// );
