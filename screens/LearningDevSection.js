import React from 'react';
import {View, Text, ScrollView, StyleSheet , TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const LearningDevSection= ({navigation}) => {

    return(
        <>  
        <ScrollView>
            
            <View style={styles.container}>
                    <View style={{flexDirection:"row", paddingVertical:20,}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:200}}>
                        <Image source={require('../assets/vector_img/education.jpg')}
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
                                Mental (curricular) Education
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                onPress={() => navigation.navigate("LearningCurricularSujects")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Start
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", paddingVertical:20,}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:150}}>
                        <Image source={require('../assets/vector_img/mental2.jpg')}
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
                                Mental (co-curricular) Education
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                // onPress={() => navigation.navigate("DevStrucScreen")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Start
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", paddingVertical:20,}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:180}}>
                        <Image source={require('../assets/vector_img/exercise.jpg')}
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
                                Physical Education
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                onPress={() => navigation.navigate("age_5_6_l_physical")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Start
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", paddingVertical:20,}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:150}}>
                        <Image source={require('../assets/vector_img/emotional.jpg')}
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
                                Emotional Education
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                // onPress={() => navigation.navigate("DevStrucScreen")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Start
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", paddingVertical:20,}}>
                        <View style={{flex: 3, justifyContent:"center", alignItems:"center", height:150}}>
                        <Image source={require('../assets/vector_img/Moral.jpg')}
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
                                Moral Structure
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                // onPress={() => navigation.navigate("DevStrucScreen")}
                                >
                                <View style={{flexDirection:"row", backgroundColor:"#240a8a", padding:4, paddingLeft: 10, borderRadius:5,  marginRight: 30, alignItems:"center"}}>
                                    <Text style={{ fontSize: 15, fontWeight:"bold", color:"#fff"}}>
                                        Start
                                    </Text>
                                    <Feather name="chevron-right"  size={18} color={"white"} style={{marginLeft:5}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
        </ScrollView>
        </>
    )
};

export default LearningDevSection;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff"
    }
})