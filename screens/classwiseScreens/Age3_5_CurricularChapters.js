import React, { useContext } from 'react'
import {
    View, Text, StyleSheet, FlatList
} from 'react-native'

import {data} from '../../Model/data';

import AgeGroupCard from '../../components/AgeGroupCard';
import ChapterCard from '../../components/ChapterCard';

const Age3_5_CurricularChapters = ({navigation, route}) => {
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


                    </View>
                </View>
            </View>
        </>
    )
}

export default Age3_5_CurricularChapters;

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