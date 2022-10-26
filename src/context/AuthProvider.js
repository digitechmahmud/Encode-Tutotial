import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[])

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const signInGithub = (githubProvider) => {
        return signInWithPopup(auth, githubProvider);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        signInGoogle,
        logOut,
        userProfileUpdate,
        signInGithub
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;