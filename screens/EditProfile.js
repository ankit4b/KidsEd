import React, {useState, useContext, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';
// import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar'
import { AuthContext } from '../navigation/AuthProvider'
import ProgressBar from 'react-native-progress/Bar'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = () => {

  const {update, user, userData} = useContext(AuthContext);
  const userid = user.uid;

  // const [userData, setUserData] = useState({});

  const [image, setImage] = useState(userData.image);
  const [name, setName] = useState(userData.username);
  const [mobileNo, setMobileNo] = useState(userData.mobileNo);
  const [country, setCountry] = useState(userData.country);
  const [city, setCity] = useState(userData.city);
  const [pin, setPin] = useState(userData.pin);

  const [imageUploading, setImageUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null)

  
  // useEffect(() => {
  //   const onValueChange = database()
  //     .ref(`/users/${user.uid}`)
  //     .on('value', snapshot => {
  //       console.log('User data: ', snapshot.val());
  //       setUserData(snapshot.val())
  //       console.log("userdata :: - ", userData)
  //     });

  //   // Stop listening for updates when no longer required
  //   return () =>
  //     database()
  //       .ref(`/users/${user.uid}`)
  //       .off('value', onValueChange);
  // }, [user.uid]);


  const chooseImage = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 500,
        maxWidth: 500,
      },
      (response) => {
        uploadImage(response);
      },
    )
  }

  const uploadImage = async (response) => {
    setImageUploading(true)
    const reference = storage().ref(response.fileName)

    const task = reference.putFile(response.uri)
    task.on('state_changed', (taskSnapshot) => {
      const percentage = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000

      setUploadStatus(percentage)
    })

    task.then(async () => {
      const url = await reference.getDownloadURL()

      setImage(url)
      setImageUploading(false)
    })
  }

  const doUpdate = (name, mobileNo, country, city, pin, image) => {
    console.log(name, mobileNo, country, city, pin)
    database()
    .ref(`/users/${user.uid}`)
    .update({
      username : name,
      image : image,
      mobileNo : mobileNo,
      country : country,
      city : city,
      pin : pin,

    })
    .then((response) => console.log("Data set success",response))
    Snackbar.show({
      text : "Updated successfully",
      textColor: "#0d9c00",
      backgroundColor: "#e3e6ff"
    })
  }

  return(
    <>
      <View style={styles.container}>
            
          <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <ImageBackground
                  source={{
                    uri: image
                  }}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                      <TouchableOpacity
                        onPress={chooseImage }
                      >
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>

                {imageUploading && (
                <ProgressBar progress={uploadStatus} style={styles.progress} />
              )}
                
              
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {/* Ankit Sahu */}
            {userData.username}
          </Text>
        </View>
        
        <ScrollView>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={"#000"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder={userData.username}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setName(text)}
          />
        </View>
        
        <View style={styles.action}>
          <Feather name="phone" color={"#000"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder={userData.mobileNo}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setMobileNo(text)}
          />
        </View>
        {/* <View style={styles.action}>
          <FontAwesome name="user-o" color={"#000"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder= "Age"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setAge(text)}
          />
        </View> */}
        <View style={styles.action}>
          <FontAwesome name="globe" color={"#000"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder={userData.country}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setCountry(text)}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={"#000"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder={userData.city}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setCity(text)}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-radius" color={"#000"} size={20} style={{marginLeft: 20}} />
          <TextInput
            placeholder={userData.pin}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: "#000",
                marginLeft: 20,
              },
            ]}
            onChangeText= {text => setPin(text)}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} 
              onPress={()=> doUpdate(name, mobileNo, country, city, pin, image)}
        >
          <Text style={styles.panelButtonTitle}>Update</Text>
        </TouchableOpacity>

        </ScrollView>
                
          </View>
    </>
  )
};

export default EditProfile;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#5d0d8f',
      alignItems: 'center',
      marginTop: 40,
      margin: 20,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#b2ace6',
      paddingBottom: 5,
      // borderWidth:1,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });
  