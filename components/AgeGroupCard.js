import React from  'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const AgeGroupCard = ({buttonTitle, ...rest}) => {
    return(
        <>
        <TouchableOpacity   {...rest}>
        <LinearGradient colors={['#dbe7ff', '#e6eeff', '#c3d5fa']} style={styles.buttonContainer}>
        
            <View style={styles.textContainer}>
                <Text style={{fontWeight:"bold", fontSize:20}}>
                    {buttonTitle}
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <Feather name="chevron-right"  size={20} color={"#000"} style={{marginLeft:5,}} />
            </View>

        </LinearGradient>
        </TouchableOpacity>
    </>
    )
}

export default AgeGroupCard;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection:"row", 
        width:"90%", 
        // backgroundColor:"#f3f0ff", 
        paddingVertical: 12, 
        borderRadius: 7, 
        marginVertical: 10, 
        borderColor:"#ccc", 
        borderWidth: 1
    },
    textContainer : {
        flex: 2, 
        alignItems:"center", 
        justifyContent:"center"
    },
    iconContainer: {
        flex: 1, 
        alignItems:"center", 
        justifyContent:"center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#ffffff",
    }
})