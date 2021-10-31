import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth"; 


initializeAuthentication();

const useFirebase = () => {
 

  const auth = getAuth();

  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  
  const signInWithGoogle = () => {
  

    return signInWithPopup(auth, googleProvider);
    
  };


  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribed;
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return {
    user,
    logOut,
    signInWithGoogle
  };
};

export default useFirebase;
