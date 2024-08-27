import React, {useContext, useEffect} from 'react';
import '../firebase.js';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';

const AuthContext = React.createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(null);

    useEffect(() => {

        const auth = getAuth();
        return onAuthStateChanged(auth, user => {
            setCurrentUser(auth.currentUser);
            setLoading(false);
        });
    }, []);

    // signup function
    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        // set current user in our local state
        const user = auth.currentUser;
        setCurrentUser({...user});
    }

    // login
    async function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    async function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth };


