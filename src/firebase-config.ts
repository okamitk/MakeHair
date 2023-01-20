<<<<<<< HEAD
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAFndLwoxDWDwELBfjp-K_EZgb_5rcec2U",
    authDomain: "makehair-3fc93.firebaseapp.com",
    projectId: "makehair-3fc93",
}
const firebaseApp = initializeApp(
    firebaseConfig
  );
=======
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAFndLwoxDWDwELBfjp-K_EZgb_5rcec2U",
    authDomain: "makehair-3fc93.firebaseapp.com",
    projectId: "makehair-3fc93",
}
const firebaseApp = initializeApp(
    firebaseConfig
  );
>>>>>>> f271e65d4a9fd9ee2493473f89770a34bbbe9169
export const Auth = getAuth(firebaseApp);