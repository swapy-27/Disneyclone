import {initializeApp} from "firebase/app";
import  {getAuth, GoogleAuthProvider}  from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDTRzVNbZrDThn9nl3P6TNPKWyxuzSiyAM",
    authDomain: "disney-hotstar-clone-13062.firebaseapp.com",
    projectId: "disney-hotstar-clone-13062",
    storageBucket: "disney-hotstar-clone-13062.appspot.com",
    messagingSenderId: "551825367929",
    appId: "1:551825367929:web:0eb98459d281c9af1945a8",
    measurementId: "G-9BS2C7TSMK"
  };



const firebaseApp = initializeApp(firebaseConfig);
const auth = new getAuth();
const provider = new GoogleAuthProvider();
const db = new getFirestore(firebaseApp);
// const storage = new Storage();
export {auth , provider };
export default db;
