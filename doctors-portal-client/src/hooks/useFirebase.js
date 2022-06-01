import { useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect } from "react";
// initialize firebase app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('')
        // const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // const user = result.user;
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message)
            });
    }




    const registerUser = (email, password, name) => {
        // setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                    // const newUser = { email, displayName: name }
                    // setUser(newUser)
                    // setUser({ displayName: name })

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {}).catch((error) => {});


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
        signInWithGoogle,
        loginUser,
        logout
    }
}
export default useFirebase;