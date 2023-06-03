import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {

    // const navigate = useNavigate();

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            }
            else {
                setAuthUser(null)
            }
        });

        return () => {
            listen()
        }
    }, [])

    const userSignOut = () => {

        signOut(auth).then(() => {
            console.log("Signed out successfully");
        }).catch(error => console.log(error))
    }

    return (
        <div>
            { authUser ? 
                <div onClick={userSignOut}>
                    Sign Out
                </div> : <p></p>}
        </div>
    )
}

export default AuthDetails