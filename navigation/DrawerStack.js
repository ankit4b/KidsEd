import { createDrawerNavigator } from '@react-navigation/drawer';
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
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

// import PaymentScreen from '../screens/PaymentScreen';

import Home from '../screens/home';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        
        {/* <Drawer.Screen name="PaymentScreen" component={PaymentScreen} /> */}
      </Drawer.Navigator>
      </NavigationContainer>
    );
  }

export default MyDrawer;