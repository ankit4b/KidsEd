import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Paragraph,
    useTheme
  } from 'react-native-paper';
import React, {useContext} from 'react';
  
import { View,
      StyleSheet
      } from 'react-native';
  
import {
      DrawerContentScrollView,
      DrawerItem
      } from '@react-navigation/drawer'
  
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// import Share from 'react-native-share';
// import files from '../assets/fileBase64';

import { AuthContext } from '../navigation/AuthProvider';

export function DrawerContent(props) {

  // const myCustomShare = async() => {
  //   const shareOptions = {
  //     message : "Hye... download this app 'Kids Education' from this link below : www.google.com ",
  //     url: files.appLogo,
  //     // url: [files.image1, files.image2]
  //   }
  //   try {
  //     const shareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(shareResponse))
  //   }catch(error){
  //     console.log('Error is : ', error)
  //   }
  // }


  const {user, logout, userData} = useContext(AuthContext);     
    const paperTheme = useTheme();
     
    return(
          <View style={{ flex:1 }}>
                <DrawerContentScrollView {...props}>
                  <View style={styles.drawerSection}>
                      <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                          <Avatar.Image
                              source={{
                                uri: userData.image
                              }}
                              size={60}
                          />
                          <View style = {{marginLeft: 15}}>
                              <Title style={styles.title}>
                                  {userData.username}
                              </Title>
                              <Caption style={styles.caption}>
                                  {user.email}
                              </Caption>
                          </View>
                        </View>
                    </View>
              <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name = "home-outline"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name = "account-outline"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialIcons 
                        name = "payments"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Subscription"
                    // onPress={() => {props.navigation.navigate('PaymentScreen')}}
                    onPress={() => {props.navigation.navigate('Subscription')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                        <Feather 
                        name = "pie-chart"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Dashboard"
                    // onPress={() => {props.navigation.navigate('Dashboard')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                        <Feather 
                        name = "settings"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Settings"
                    // onPress={() => {props.navigation.navigate('Settings')}}
                  />
                  <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name = "account-check-outline"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Support"
                    // onPress={() => {}}
                  />
              </Drawer.Section>
              <Drawer.Section title="Preferance">
                  <TouchableRipple >
                      <View style={styles.preference}>
                          <Text>
                              Dark Theme
                          </Text>
                          <View pointerEvents="none">
                              <Switch value={paperTheme.dark}/>
                          </View>
                      </View>
                  </TouchableRipple>
              </Drawer.Section>
                    
                  </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                  <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name = "exit-to-app"
                        color={color}
                        size = {size}
                        />
                    )}
                    label="Sign out"
                    onPress={() => logout()}
                  />
                </Drawer.Section>
              </View>
      )
  }
  
  const styles = StyleSheet.create({
      drawerContent: {
        flex: 1,
      },
      bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
      },
      drawerSection: {
          marginTop: 15,
        },
      userInfoSection: {
          paddingLeft: 20,
        },
        title: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
        },
        paragraph: {
          fontWeight: 'bold',
          marginRight: 3,
        },
        row: {
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        section: {
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
        },
        drawerSection: {
          marginTop: 15,
        },
        preference: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
        },
    })