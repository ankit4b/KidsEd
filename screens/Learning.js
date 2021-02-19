import React, { useContext } from 'react'
import {
    View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Pressable,ScrollView
} from 'react-native'
// import { AuthContext } from '../navigation/AuthProvider';
import AgeGroupCard from '../components/AgeGroupCard';

const Learning = ({navigation}) => {
    // const {user, logout} = useContext(AuthContext);

    return(
        <>
            
            <ScrollView style={styles.container}>
            

                <View style={{marginTop: 30}}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        
                        <AgeGroupCard
                            buttonTitle="Age 0-3"
                            // onPress={() => navigation.navigate("LearningDevSection", {title: 'Age 0-3'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 3-5"
                            onPress={() => navigation.navigate("Age3_5_Dev_Screen", {title: 'Age 3-5'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 5-6"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 5-6'})}
                        />

                        <AgeGroupCard
                            buttonTitle="Age 6-7"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 6-7'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 7-8"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 7-8'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 8-9"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 8-9'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 9-10"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 9-10'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 10-11"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 10-11'})}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Age 11-12"
                            // onPress={() => navigation.navigate("age_5_6_learning", {title: 'Age 11-12'})}
                        />
                    </View>
                    
                </View>
                
            </ScrollView>
        </>
    )
}

export default Learning;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        width: '100%',
        backgroundColor: "#2e64e5",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding:10,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#ffffff",
        // fontFamily: 'Lato-Regular',
    }
})