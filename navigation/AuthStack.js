import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Onboarding from 'react-native-onboarding-swiper';


import Login from '../screens/Login';
import Home from '../screens/Home';
// import OnboardingScreen from '../screens/onboardingScreen';
import Signup from '../screens/Signup';
// import DevStrucScreen from '../screens/devStrucScreen';
import SplashScreen from '../screens/SplashScreen';

// import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  var routeName;

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if(value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true');
//         setIsFirstLaunch(true);
//       }else{
//         setIsFirstLaunch(false);
//     } 
//     });
//     GoogleSignin.configure({
//       // webClientId: '248769422991-06r8knevcdh6t99vvbqfvlrhp8ebclbt.apps.googleusercontent.com',
//       webClientId: '248769422991-0nggt57k7m3resd1t1sgakuiadib83ir.apps.googleusercontent.com',
//     });
//   }, []);

//   if (isFirstLaunch === null){
//     return null;
//     // routeName='Onboarding';
//   } 
//   else if ( isFirstLaunch == true){
//     routeName = 'Onboarding';
//   }
//   else{
//       routeName = 'SplashScreen';
//   }

  return(
    
    <Stack.Navigator initialRouteName={routeName}>
        {/* <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{header : () => null}} 
        /> */}
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{header : () => null}} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login}  
          options={{header : () => null}} 
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{header : () => null}} 
          />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{header : () => null}} 
        />
    </Stack.Navigator>
  )
  
};

export default AuthStack;
