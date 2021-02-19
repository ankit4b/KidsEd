import React, {useContext} from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Avatar, } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import SplashScreen from  '../screens/SplashScreen';
import Learning from '../screens/Learning';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import LearningDevSection from '../screens/LearningDevSection';
import LearningCurricularSujects from '../screens/LearningCurricularSujects';
import LearningCurricularChapters from '../screens/LearningCurricularChapters';
import Content from '../screens/Content';
import Activity from '../screens/Activity';
import PaymentScreen from '../screens/PaymentScreen';
import { AuthContext } from '../navigation/AuthProvider';

import DevelopmentStructure from '../screens/DevelopmentStructure';
import TipsForParents from '../screens/TipsForParents';
import Subscription from '../screens/Subscription';

import Age3_5_Dev_Screen from '../screens/classwiseScreens/Age3_5_Dev_Screen';
import Age3_5_CurricularSubjects from '../screens/classwiseScreens/Age3_5_CurricularSubjects';
import Age3_5_CurricularChapters from '../screens/classwiseScreens/Age3_5_CurricularChapters';
import Age3_5_CocurricularSubjects from '../screens/classwiseScreens/Age3_5_CocurricularSubjects';
import Age3_5_CocurricularChapters from '../screens/classwiseScreens/Age3_5_CocurricularChapters';


const Stack = createStackNavigator();

const AppStack = ({navigation}) => {
  const {user, userData} = useContext(AuthContext);
    return(
        <>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} 
                        options={{
                            title : "KidsEd",
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                            headerLeft : () => (
                              <MaterialCommunityIcons.Button
                              name = "menu"
                              size = {25}
                              color = "#fff"
                              backgroundColor="#180661"
                              onPress={() => navigation.openDrawer()}
                              />
                            ),
                            headerRight : () => (
                              <View style={{flexDirection: "row", marginRight: 20, alignItems:"center"}}>
                              {/* <Icon.Button
                              name = "search"
                              size = {20}
                              color = "#fff"
                              backgroundColor="#180661"
                              /> */}
                              <TouchableOpacity  
                                  onPress={() => navigation.navigate('Profile')} 
                                  style={{borderColor: "#fff", borderWidth:1, borderStyle:"solid",  borderRadius: 100, padding:1}}
                                  >
                                <Avatar.Image
                                        source={{
                                          uri: userData.image
                                        }}
                                        size={30}
                                      />
                              </TouchableOpacity>
                              </View>
                            )
                          }}
                    />
                    <Stack.Screen name="Profile" component={Profile} 
                        options={{
                            title : 'Profile', 
                            headerTitleAlign:'center',
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                            headerRight : () => (
                              <MaterialCommunityIcons.Button
                              name = "account-edit-outline"
                              size = {25}
                              color = "#fff"
                              backgroundColor="#180661"
                              onPress={() => navigation.navigate('EditProfile')}
                              />
                            )
                            }}  
                    />
                    <Stack.Screen name="EditProfile" component={EditProfile}
                        options={{
                          title : 'Edit Profile', 
                          headerTitleAlign:'center',
                          headerStyle: {
                            backgroundColor: '#180661',
                          },
                          headerTintColor: '#fff',
                        }} 
                         />

                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Learning" component={Learning}
                        options={{
                            title : 'Start Learning', 
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                          }} 
                    />
                    <Stack.Screen name="LearningDevSection" component={LearningDevSection}
                        options={({route}) => 
                        ({
                          title : route.params.title, 
                          headerTitleAlign:'center',
                          headerStyle: {
                            backgroundColor: '#180661',
                          },
                          headerTintColor: '#fff',
                        })
                        } 
                    />
                    <Stack.Screen name="LearningCurricularSujects" component={LearningCurricularSujects} />
                    <Stack.Screen name="LearningCurricularChapters" component={LearningCurricularChapters}
                        // options={({route}) => 
                        // ({
                        //   title : route.params.title, 
                        //   headerTitleAlign:'center',
                        //   headerStyle: {
                        //     backgroundColor: '#180661',
                        //   },
                        //   headerTintColor: '#fff',
                        // })
                        // } 
                    />
                    <Stack.Screen name="Content" component={Content} 
                      options={({route}) => 
                        ({
                          title : route.params.itemData.title, 
                          headerTitleAlign:'center',
                          headerStyle: {
                            backgroundColor: '#180661',
                          },
                          headerTintColor: '#fff',
                        })
                        } 
                    />
                    <Stack.Screen name="Activity" component={Activity} 
                      options={{
                        title : 'Quizes', 
                        headerTitleAlign:'center',
                        headerStyle: {
                          backgroundColor: '#180661',
                        },
                        headerTintColor: '#fff',
                      }} 
                    />
                    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                    
                    
                    <Stack.Screen name="Subscription" component={Subscription} 
                      options={{
                        title : 'Subscription', 
                        headerTitleAlign:'center',
                        headerStyle: {
                          backgroundColor: '#180661',
                        },
                        headerTintColor: '#fff',
                      }} 
                    />
                    <Stack.Screen name="DevelopmentStructure" component={DevelopmentStructure} 
                      options={{
                        title : 'Development Structure', 
                        headerTitleAlign:'center',
                        headerStyle: {
                          backgroundColor: '#180661',
                        },
                        headerTintColor: '#fff',
                      }} 
                    />
                    <Stack.Screen name="TipsForParents" component={TipsForParents} 
                      options={{
                        title : 'Tips for Parents', 
                        headerTitleAlign:'center',
                        headerStyle: {
                          backgroundColor: '#180661',
                        },
                        headerTintColor: '#fff',
                      }} 
                    />




                    <Stack.Screen 
                          name="Age3_5_Dev_Screen" 
                          component={Age3_5_Dev_Screen} 
                          options={{
                            title : 'Development Sections', 
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                          }} 
                          />
                    <Stack.Screen 
                          name="Age3_5_CurricularSubjects"
                          component={Age3_5_CurricularSubjects} 
                          options={{
                            title : 'Subjects', 
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                          }} 
                    />
                    <Stack.Screen 
                          name="Age3_5_CurricularChapters" 
                          component={Age3_5_CurricularChapters} 
                          options={{
                            title : 'Chapters', 
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                          }} 
                          />
                    <Stack.Screen 
                          name="Age3_5_CocurricularSubjects"
                          component={Age3_5_CocurricularSubjects} 
                          options={{
                            title : 'Subjects', 
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                          }} 
                    />
                    <Stack.Screen 
                          name="Age3_5_CocurricularChapters"
                          component={ Age3_5_CocurricularChapters } 
                          options={{
                            title : 'Chapters', 
                            headerTitleAlign:'center',
                            headerStyle: {
                              backgroundColor: '#180661',
                            },
                            headerTintColor: '#fff',
                          }} 
                    />



                </Stack.Navigator>
        </>
    )
}

export default AppStack;