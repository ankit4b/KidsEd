import React, {useState, useContext} from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, StatusBar, KeyboardAvoidingView ,Alert
} from 'react-native'

// import styled from "styled-components";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
// import { Container } from 'native-base';

import * as Animatable from 'react-native-animatable';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext);

    const handleLogin = (email, password) => {
      if((email.length != 0) && (password.length != 0))
      {
        login(email, password);
      }
      else{
        Alert.alert("Email_id or password should not be empty")
      }
        
    }

    return(
        <>
          <View style={styles.container}>
              <Animatable.Image 
                        animation="bounceIn"
                        duration={1500}
                        source={require('../assets/EducationLogo1.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
            {/* <KeyboardAwareScrollView
              style={{ backgroundColor: '#fff' }}
              resetScrollToCoords={{ x: 0, y: 0 }}
              contentContainerStyle={styles.container}
              scrollEnabled={false}
            > */}
          
                {/* <Animatable.View 
                  style={{marginBottom: 40, marginTop:40}}
                  animation="bounce"> */}
                  <Text style={[styles.text, {fontSize: 35, fontWeight: 'bold', color:"#5113bd" } ]}>
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
                {/* </Animatable.View> */}
                

                <FormInput 
                  labelValue = {email}
                  onChangeText = {(userEmail) => setEmail(userEmail)}
                  placeholderText = "Email"
                  iconType = "user"
                  keyboardType = "email-address"
                  autoCapitalize = "none"
                  autoCorrect = {false}
                />

                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <FormButton
                    buttonTitle="Sign In"
                    onPress={() => handleLogin(email, password)}
                />

                <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                        <Text style={styles.navButtonText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View>
                      <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                        // onPress={() => fbLogin()}
                      />

                      <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                        // onPress={() => googleLogin()}
                      />
                    </View>

                    <TouchableOpacity
                      style={styles.forgotButton}
                      onPress={() => navigation.navigate('Signup')}>
                      
                      <Text style={styles.navButtonText}>
                        Don't have an acount? Create here
                      </Text>
                  </TouchableOpacity>

                {/* </ScrollView> */}
                {/* <HeaderGraphics>
                  <View style={{opacity: 1 ,transform: [
                      { rotateZ: "45deg" },
                      // { rotateZ: "45deg" }
                    ]}}>
                    <RightCircle />
                  </View>
                  <View style={{opacity: 0.9 ,transform: [
                      { rotateZ: "45deg" },
                      // { rotateZ: "45deg" }
                    ]}}>
                    <LeftCircle />  
                  </View>
                </HeaderGraphics> */}
                <StatusBar barStyle="light-content"/>
            
            {/* </KeyboardAwareScrollView> */}
            {/* </Container> */}
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#180661" translucent = {true}/>
            </View>
        </>
    )
}

export default Login;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.18;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex:1,
      // justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor:"#fff"
    },
    // logo: {
    //   height: 150,
    //   width: 150,
    //   resizeMode: 'cover',
    // },
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
  });