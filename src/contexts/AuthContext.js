import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const history = useHistory();
    
    const signUp = (signUpInfo) => {
        axios.post('http://localhost:4000/register', signUpInfo, { withCredentials: true })
            .then(res => {
                const { email, _id } = res.data;
                setCurrentUser({email, _id});
                history.push("/details");
            })
            .catch(err => {
                console.log(err);
            })
    }

    const logIn = (loginInfo) => {
        axios.post('http://localhost:4000/login', loginInfo, {withCredentials: true})
            .then(res => {
                const {email, _id} = res.data;
                console.log(res.data);
                setCurrentUser({email, _id});
                history.push("/");
            })
            .catch(err => {
                console.log(err)
            })
    }

    const logOut = () => {
        axios.get('http://localhost:4000/logout')
        .then(res => {
            console.log(res);
            setCurrentUser(null);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
