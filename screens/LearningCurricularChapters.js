import React, { useContext } from 'react'
import {
    View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, ScrollView
} from 'react-native'

import {data} from '../Model/data';

import AgeGroupCard from '../components/AgeGroupCard';
import ChapterCard from '../components/ChapterCard';

const LearningCurricularChapters = ({navigation, route}) => {
    const chapters = route.params.chapters;

    const renderItem = ({item}) => {
        return (
            <ChapterCard
                itemData = {item}
                onPress={() => navigation.navigate("Content", {itemData : item})}
            />
        )
    }

    return(
        <>  
            
            <View style={styles.container}>
            
                <View style={{marginTop: 30}}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        
                        <FlatList
                            data = {chapters}
                            renderItem = {renderItem}
                            keyExtractor = { item => item.id }
                        />

                        {/* <AgeGroupCard
                            buttonTitle="Chapter 1"
                            onPress={() => navigation.navigate("Content")}
                        />
                        
                        <AgeGroupCard
                            buttonTitle="Chapter 2"
                            onPress={() => navigation.navigate("Content")}
                        />
                        <AgeGroupCard
                            buttonTitle="Chapter 3"
                            onPress={() => navigation.navigate("Content")}
                        /> */}
                        {/* <AgeGroupCard
                            buttonTitle="Chapter 4"
                            onPress={() => navigation.navigate("age_5_6_l_curricular_c1", {title: 'Mental '})}
                        /> */}
                        {/* <AgeGroupCard
                            buttonTitle="Chapter 5"
                            onPress={() => navigation.navigate("age_5_6_l_curricular_c1", {title: 'Mental '})}
                        /> */}
                        {/* <AgeGroupCard
                            buttonTitle="Chapter 6"
                            onPress={() => navigation.navigate("age_5_6_l_curricular_c1", {title: 'Mental '})}
                        /> */}
                        {/* <AgeGroupCard
                            buttonTitle="Chapter 7"
                            onPress={() => navigation.navigate("age_5_6_l_curricular_c1", {title: 'Mental '})}
                        /> */}

                    </View>

        {/* <View style={{}}>
                    <FlatList
                        data = {data1[0].Age_0_3.curricular_section}
                        renderItem = {renderItem}
                        keyExtractor={item => item.id}
                        style={{width:"100%", marginLeft: 20}}
                    />
      </View>               */}

                </View>
                    
                
            </View>
        </>
    )
}

export default LearningCurricularChapters;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex: 1, 
    },
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
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
})