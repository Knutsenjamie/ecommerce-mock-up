import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7fKVvfYDYlsoV1cq76vYJMEKzLuAnjhU",
    authDomain: "crown-clothing-db-d6b3f.firebaseapp.com",
    projectId: "crown-clothing-db-d6b3f",
    storageBucket: "crown-clothing-db-d6b3f.appspot.com",
    messagingSenderId: "170819598978",
    appId: "1:170819598978:web:d953c63455da02ed58529b"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);