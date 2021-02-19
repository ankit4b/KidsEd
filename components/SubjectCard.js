import React from  'react';
import { Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const SubjectCard = ({subjectName, imagesrc, height, ...rest}) => {
    
    return(
            <>
            <View style={{flexDirection:"row", paddingVertical:20, paddingHorizontal:10}}>
                        <View style={{flex: 4, justifyContent:"center", alignItems:"center", height:130}}>
                        <Image source={imagesrc}
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
                                {subjectName}
                            </Text>
                            <TouchableOpacity style={{marginTop: 10}}
                                {...rest}
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

            </>
        )
};

export default SubjectCard;