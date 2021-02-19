import React, {useContext} from 'react';
import {
    View, StyleSheet, Image, TouchableOpacity, Text,ScrollView, Touchable, StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../navigation/AuthProvider'

const Home = ({navigation}) => {
    const {user, userData} = useContext(AuthContext);
    console.log(userData)
    return(
        <>
        <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
                

                    <Swiper autoplay height={200} activeDotColor="#240a8a">
                    
                    <View style={styles.slide}>
                        <Image
                        source={require('../assets/ed_banner1.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                        source={require('../assets/ed_banner2.jpg')}
                        resizeMode="cover"
                         style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                        source={require('../assets/ed_banner3.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                        source={require('../assets/ed_banner4.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                        />
                    </View>
                    </Swiper>
            </View>
            <View >

                    <View style={{flexDirection:"row", paddingVertical:20}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:150}}>
                        <Image source={require('../assets/vector_img/1.jpg')}
                                resizeMode="cover" 
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    alignSelf: 'center',
                                    borderRadius: 8,
                                }} />
                        </View>
                        <View style={{flex: 2,  justifyContent:"center", alignItems:"center"}}>
                            <Text style={{textAlign:"center", marginRight: 30, fontWeight:"bold", fontSize:20, color:"#1a085e"}}>
                                Know Development Structure
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                onPress={() => navigation.navigate("DevelopmentStructure")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Know
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{flexDirection:"row", paddingVertical:20}}>
                        <View style={{flex: 2,  justifyContent:"center", alignItems:"center"}}>
                            <Text style={{textAlign:"center", marginLeft: 30, fontWeight:"bold", fontSize:25, color:"#1a085e"}}>
                                Start Learning
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                onPress={() => navigation.navigate("Learning")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginLeft: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Start
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:150}}>
                        <Image source={require('../assets/vector_img/2.jpg')}
                                resizeMode="cover" 
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    alignSelf: 'center',
                                    borderRadius: 8,
                                }} />
                        </View>
                        
                    </View>

                    
                    <View style={{flexDirection:"row", paddingVertical:20}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:150}}>
                        <Image source={require('../assets/vector_img/3.jpg')}
                                resizeMode="cover" 
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    alignSelf: 'center',
                                    borderRadius: 8,
                                }} />
                        </View>
                        <View style={{flex: 2,  justifyContent:"center", alignItems:"center"}}>
                            <Text style={{textAlign:"center", marginRight: 30, fontWeight:"bold", fontSize:20, color:"#1a085e"}}>
                                Tips for Parents
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                onPress={() => navigation.navigate("TipsForParents")}
                            >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Tips
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#180661" translucent = {true}/>
        </ScrollView>
        </>
    )
};

export default Home;


const styles = StyleSheet.create({
    heading: {
        alignItems:"center",
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        paddingTop:0,
        backgroundColor: "#292482",
        shadowColor: "#000", shadowOffset: {	width: 0,	height: 11,}, shadowOpacity: 0.55, shadowRadius: 14.78, elevation: 15,
    },
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        letterSpacing: 2
    },
    container: {
        backgroundColor:"#fff"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
      sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },

})