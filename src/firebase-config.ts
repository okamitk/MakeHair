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
export const Auth = getAuth(firebaseApp);