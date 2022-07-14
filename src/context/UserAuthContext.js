import { createContext, useState, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase-config";
import { doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase-config";

const userAuthContext = createContext();

export function UserAuthContextProvidor({children}) {
    const [user,setUser] = useState("");
        function signup(data) {
            return createUserWithEmailAndPassword(auth,data.email,data.password).then(async ()=>{
            const userCollectionRef = doc(db,'users',auth.currentUser.uid);
            await setDoc(userCollectionRef,data);
                })
                .catch((err)=>{
                    console.error(err)
                })
        
        }

        function login(email, password) {
            try{
            return signInWithEmailAndPassword(auth,email,password)
            }
            catch(err){
                console.log(err);
            }
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
          });
    return () => {
        unsubscribe();
    }
},[])
return (
    <userAuthContext.Provider value={{user,signup,login,logOut}}>
        {children}
    </userAuthContext.Provider>
)

}

export function useUserAuth() {
    return useContext(userAuthContext);
}