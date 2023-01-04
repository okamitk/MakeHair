import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {

}
const firebaseApp = initializeApp(
    firebaseConfig
  );
export const Auth = getAuth(firebaseApp);