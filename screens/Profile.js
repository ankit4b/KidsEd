// import { Container, Header, Title, Body, Left, } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Pressable, StatusBar, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../navigation/AuthProvider'
import {windowHeight} from '../utils/Dimentions'
import styled from "styled-components";
import LinearGradient from 'react-native-linear-gradient';

// import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

const profile= ({navigation}) => {
    const {user, userData} = useContext(AuthContext);
    // const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const onValueChange = database()
    //       .ref(`/users/${user.uid}`)
    //       .on('value', snapshot => {
    //         console.log('User data: ', snapshot.val());
    //         setUserData(snapshot.val())
    //         console.log("userdata :: - ", userData)
    //       });
    
    //     // Stop listening for updates when no longer required
    //     return () =>
    //       database()
    //         .ref(`/users/${user.uid}`)
    //         .off('value', onValueChange);
    //   }, [user.uid]);
    


    if(loading){
        return(
          <View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
            <ActivityIndicator
                     color = '#bc2b78'
                     size = "large"/>
          </View>
        )
      }


    return(
        <View style={styles.container}>
            {userData ? 
                

            <ScrollView contentContainerStyle={styles.bodyContent}>
            
                <View style={{flexDirection:"row"}}>
                    <View style={{marginTop: 80, paddingRight: 10}}>
                        <Text style={{fontSize: 27, fontWeight:"bold", color:"white"}}>
                            {/* { user.displayName } */}
                            {userData.username}
                            {/* Ankit Sahu */}
                        </Text>
                        <Text style={{color: "#fff", fontSize:15}}>
                            {user.email}
                        </Text>
                    </View>
                    <View  style={{marginTop:50}}>
                        <View style={{
                        width: 150,
                        height: 150,
                        backgroundColor: "#456789",
                        margin: 20,
                        borderRadius: 100,
                        borderWidth: 6,
                        borderColor: "#fff",
                        
                    }}>
                        <Image
                            source={{
                                uri: userData.image
                              }}
                            style={{width: "100%", height:"100%", borderRadius: 100}} 
                        />
                    </View> 
                    </View>
                </View>
       
        <View style={[styles.userInfoSection, {marginTop: 50}]}>
   
        <View style={styles.row}>
            <View style={{borderRadius: 25, borderWidth: 1, padding: 5, borderColor: "#ceceeb", backgroundColor:"#4b0694", }}>
                <Icon name="phone" color="#fff" size={25}/>
            </View>
                <Text style={{color:"#333", marginLeft: 40, fontSize: 20}}>
                    {userData.mobileNo }
                    {/* +91-7377515257 */}
                </Text>
        </View>
        <View style={styles.row}>
            <View style={{borderRadius: 25, borderWidth: 1, padding: 5, borderColor: "#ceceeb",  backgroundColor:"#4b0694"}}>
                <Icon name="email" color="#fff" size={25}/>
            </View>
            <Text style={{color:"#333", marginLeft: 40, fontSize: 20}}>
                {user.email}
                {/* ankit4b@gmail.com */}
            </Text>
        </View>
        
        <View style={styles.row}>
            <View style={{borderRadius: 25, borderWidth: 1, padding: 5, borderColor: "#ceceeb",  backgroundColor:"#4b0694"}}>
                <Icon name="map-marker-outline" color="#fff" size={25}/>
            </View>
            <Text style={{color:"#333", marginLeft: 40, fontSize: 20}}>
                {userData.pin }
                {/* 767001 */}
            </Text>
        </View>
        <View style={styles.row}>
            <View style={{borderRadius: 25, borderWidth: 1, padding: 5, borderColor: "#ceceeb",  backgroundColor:"#4b0694"}}>
                <Icon name="map-marker-radius" color="#fff" size={25}/>
            </View>
          <Text style={{color:"#333", marginLeft: 40, fontSize: 20}}>
                {userData.city }
                {/* Balangir */}
              </Text>
        </View>
        <View style={styles.row}>
            <View style={{borderRadius: 30, borderWidth: 1, padding: 5, borderColor: "#ceceeb",  backgroundColor:"#4b0694" }}>
                <FontAwesome name="globe" color={"#fff"} size={25} style={{marginLeft: 2}}  />
            </View>
          <Text style={{color:"#333", marginLeft: 40, fontSize: 20}}>
                {userData.country }
                {/* India */}
            </Text>
        </View>
        <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, borderBottomStyle: 'solid', marginTop:5, marginBottom:15}} />
        <View style={styles.row}>
            <View>
                <Text style={{color:"#4b0694", fontSize: 20, fontWeight:"bold"}}>
                    Age : 
                </Text>
            </View>
          <Text style={{color:"#333", marginLeft: 30, fontSize: 20}}>
                {userData.age }
                {/* 5 */}
            </Text>
        </View>
        <View style={styles.row}>
            <View>
                <Text style={{color:"#4b0694", fontSize: 20, fontWeight:"bold"}}>
                    Subscription : 
                </Text>
            </View>
          <Text style={{color:"#333", marginLeft: 30, fontSize: 20}}>
                {userData.subscription }
                {/* Not yet */}
            </Text>
        </View>
        
        </View>
            </ScrollView>
            
            :
            <Text>
                Looding...
            </Text>
        }

            <HeaderGraphics>
                <LinearGradient
                    colors={['#f03c7e', '#bf064a']}
                    > 
                  <View style={{opacity: 0.9,transform: [
                      { rotateZ: "65deg" },
                      // { rotateZ: "45deg" }
                    ]}}>
                    <LeftCircle />  
                  </View>
                </LinearGradient>
                </HeaderGraphics>
                {/* <StatusBar barStyle="light-content"/> */}
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#180661" translucent = {true}/>
        </View>
    )
};

export default profile;


const HeaderGraphics = styled.View`
  position : absolute;
  width: 100%;
  top: -55px;
  z-index: -100;
`;

const LeftCircle = styled.View`
  background-color: #180661;
  position: absolute;
  width: 400px;
  height: 500px;
  border-radius: 30px;
  right : -200px;
  top : -200px;
  left : 20px;
`;


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:"#fff"
    },
    bodyContent: {
        alignItems: "center"
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: "center"
      },
      buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: "#d11313",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#ffffff",
    }
})