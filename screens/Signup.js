import React, {useState, useContext} from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, StatusBar, ScrollView, TextInput, ImageBackground
} from 'react-native'
// import { Container } from 'native-base';
// import styled from "styled-components";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {AuthContext} from '../navigation/AuthProvider';
import {windowHeight} from '../utils/Dimentions'
import * as Animatable from 'react-native-animatable';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [image, setImage] = useState('https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png');
    const [username, setUsername] = useState('');
    const [parentName, setParentName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [age, setAge] = useState('');

    const {register} = useContext(AuthContext);

  
    return(
        <>
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems:"center"}} showsVerticalScrollIndicator={false}>
              <Animatable.Image 
                          animation="bounceIn"
                          duration={1500}
                          source={require('../assets/EducationLogo1.png')}
                          style={styles.logo}
                          resizeMode="stretch"
                      />
          
            {/* <Container style={styles.container}> */}
            {/* <Image source={require('../assets/KidsEdLogo.png')} style={ styles.logo} /> */}
              <View style={{marginBottom: 5, marginTop: 5}}>
                <Text style={[styles.text, {fontSize: 35, fontWeight: 'bold', color: "#fff" } ]}>
                <Text style={{color:"#671787"}}>
                        K
                      </Text>
                      <Text style={{color:"#c95f1c"}}>
                        i
                      </Text>
                      <Text style={{color:"#1d6fb3"}}>
                        d
                      </Text>
                      <Text style={{color:"#1db35b"}}>
                        s
                      </Text>
                      <Text style={{color:"#abb31d"}}>
                        E
                      </Text>
                      <Text style={{color:"#c95f1c"}}>
                        d
                      </Text>
                </Text>
              </View>

              
              <FormInput 
                  // labelValue = {Name}
                  onChangeText = {(name) => setUsername(name)}
                  placeholderText = "Student's name"
                  iconType = "user"
                  autoCorrect = {false}
                />

                
              <View style={styles.inputContainer}>
                  <View style={styles.iconStyle}>
                      <FontAwesome name="calendar-times-o" color={"#777"} size={25}  />
                  </View>
                  <TextInput
                      style={styles.input}
                      numberOfLines = {1}
                      placeholder = "Student's age"
                      placeholderTextColor = "#666"
                      keyboardType = "numeric"
                      onChangeText={(age) => setAge(age)}
                  /> 
              </View>   
              
              <FormInput 
                  // labelValue = {Name}
                  onChangeText = {(name) => setParentName(name)}
                  placeholderText = "Parent's name"
                  iconType = "user"
                  autoCorrect = {false}
                />
                          
                
                <View style={styles.inputContainer}>
                  <View style={styles.iconStyle}>
                      <FontAwesome name="envelope-o" color={"#777"} size={25}  />
                  </View>
                  <TextInput
                      style={styles.input}
                      numberOfLines = {1}
                      placeholder = "Email"
                      placeholderTextColor = "#666"
                      // keyboardType="email"
                      onChangeText = {(userEmail) => setEmail(userEmail)}
                  /> 
              </View>             


                <FormInput 
                  // labelValue = {Name}
                  onChangeText = {(mobileNo) => setMobileNo(mobileNo)}
                  placeholderText = "Mobile no."
                  iconType = "phone"
                  keyboardType = "numeric"
                  autoCorrect = {false}
                />
              
              
              <View style={styles.inputContainer}>
                  <View style={styles.iconStyle}>
                      <Entypo name="location-pin" color={"#777"} size={25}  />
                  </View>
                  <TextInput
                      style={styles.input}
                      numberOfLines = {1}
                      placeholder = "India"
                      placeholderTextColor = "#666"
                      onChangeText = {(country) => setCountry(country)}
                  /> 
              </View>
              
              <View style={styles.inputContainer}>
                  <View style={styles.iconStyle}>
                      <Entypo name="location" color={"#777"} size={25}  />
                  </View>
                  <TextInput
                      style={styles.input}
                      numberOfLines = {1}
                      placeholder = "Bhubaneswar"
                      placeholderTextColor = "#666"
                      onChangeText = {(city) => setCity(city)}
                  /> 
              </View>
              
              <View style={styles.inputContainer}>
                  <View style={styles.iconStyle}>
                      <Entypo name="location" color={"#777"} size={25}  />
                  </View>
                  <TextInput
                      style={styles.input}
                      numberOfLines = {1}
                      placeholder = "751015"
                      placeholderTextColor = "#666"
                      onChangeText = {(pin) => setPin(pin)}
                  /> 
              </View>

                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <FormInput
                    labelValue={rePassword}
                    onChangeText={(userPassword) => setRePassword(userPassword)}
                    placeholderText="Re-enter Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <FormButton
                    buttonTitle="Sign Up"
                    onPress={() => register(email, password,  username, mobileNo, country, city, pin, age, image)}
                />

                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                    </Text>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                        Terms of service
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Privacy Policy
                    </Text>
                </View>

                        <View>
              <SocialButton
                buttonTitle="Sign-up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
              />

              <SocialButton
                buttonTitle="Sign-up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
              />
            </View>

            <TouchableOpacity
            style={[styles.forgotButton, {alignItems:"center"}]}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navButtonText}>
              Already have an acount? Create here
            </Text>
          </TouchableOpacity>

          </ScrollView>
            {/* <HeaderGraphics>
                <RightCircle />
                <View style={{opacity: 0.9}}> 
                  <LeftCircle />
                </View>
                
            </HeaderGraphics>
            <StatusBar barStyle="light-content"/> */}
            
          {/* </Container> */}
          </View>
        </>
    )
}

export default Signup;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      padding: 20,

    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 150,

  },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
      inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: 0.8,
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        borderRightColor: "#ccc",
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        // fontFamily: "",
        color: "#666",
        justifyContent: 'center',
        alignItems:'center',
    },

  });