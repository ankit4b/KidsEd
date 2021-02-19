import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-community/google-signin';
import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});
    
    return(
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                userData,
                setUserData,

                login: async (email, password) => {
                    try{
                        await auth().signInWithEmailAndPassword(email, password)
                        .then((data) => {
                            console.log(data)
                            
                            database()
                                .ref(`/users/${data.user.uid}`)
                                .on('value', snapshot => {
                                    console.log('User data: ', snapshot.val());
                                    setUserData(snapshot.val())
                                    console.log("userdata :: - ", userData)
                                });
                        })
                    }
                    catch(e){
                        console.log(e)
                    }
                },
                register: async (email, password, username, mobileNo, country, city, pin, age, image) => {
                    try{
                        await auth().createUserWithEmailAndPassword(email, password)
                        .then((data) => {
                            console.log(data)
                            console.log("User creation was succes")
                            
                            database()
                            .ref('/users/' + data.user.uid)
                            .set({
                                username, 
                                mobileNo,
                                country,
                                city,
                                pin,
                                age,
                                image,
                                uid: data.user.uid
                            })
                            .then(() => console.log("Data set success"))
                            Snackbar.show({
                                text: 'account created',
                                textColor: 'white',
                                backgroundColor: "#1b262c"
                            })
                        })
                    }catch(e){
                        console.log(e)
                    }
                },
                logout: async () => {
                    try{
                        await auth().signOut()
                        .then(
                            setUserData({})
                        )
                    }catch(e){
                        console.log(e)
                    }
                },
                
            }}>
            {children}
        </AuthContext.Provider>
    );
};