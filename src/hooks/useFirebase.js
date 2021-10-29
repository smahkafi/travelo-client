
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/SignIn/Firebase/firebase.init';
 
 
initializeAuthentication();
 
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
 
 
    //name
    const getName = e => {
        setName(e.target.value);
 
    }
    //email
    const getEmail = e => {
        setEmail(e.target.value);
 
    }
    //password
    const getPassword = e => {
        setPassword(e.target.value);
    }
 
    // register with email & pass
    const newRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
                setUserName();
            }).catch(error => {
                setError(error.message)
            })
    }
 
 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => { })
    }
    //google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
 
 
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }
 
 
    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setEmail(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])
 
 
    const logOut = () => {
        signOut(auth)
 
    }
 
    return {
        user,
        setUser,
        isLoading,
        error,
        setError,
        verifyEmail,
        sendEmailVerification,
        setUserName,
        signInUsingGoogle,
        newRegister,
        handleLogin,
        getName,
        getEmail,
        getPassword,
        handleResetPassword,
        logOut
    }
}
 
 
export default useFirebase;
