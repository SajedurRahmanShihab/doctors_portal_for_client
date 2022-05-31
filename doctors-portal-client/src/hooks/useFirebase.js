import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
// initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('')
        // const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth();
    const registerUser = (email, password) => {
        // setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            // .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        // setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)

            })
            // .finally(() => setIsLoading(false));

    }

    const logout = () => {
        // setIsLoading(true);
        signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            // .finally(() => setIsLoading(true));
    }

    // Observe User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser({})
                }
            })
            // setIsLoading(false);
        return () => unsubscribe;
    }, [auth])



    return {
        user,
        authError,
        // isLoading,
        registerUser,
        loginUser,
        logout
    }
}
export default useFirebase;