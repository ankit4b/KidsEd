import React, {useState, useEffect, useContext}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth'

import {AuthContext} from './AuthProvider'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import {DrawerContent} from '../screens/DrawerContent'

import Dashboard from '../screens/Dashboard';

const Drawer = createDrawerNavigator();

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const {initializing, setInitializing} = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user)
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

    if(initializing) return null;

    return(
        <NavigationContainer independent={true}>
            {user ? 
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} >
                <Drawer.Screen name="AppStack" component={AppStack} />
                <Drawer.Screen name="Dashboard" component={Dashboard} />
          </Drawer.Navigator>
            : 
            <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;