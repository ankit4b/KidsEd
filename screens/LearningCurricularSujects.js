import React from 'react';
import {View, Text, ScrollView, StyleSheet , TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SubjectCard from '../components/SubjectCard';
import englishImg from '../assets/vector_img/english.jpg'; 
import hindiImg from '../assets/vector_img/hindi.jpg'; 
import mathImg from '../assets/vector_img/math.jpg'; 

import {data} from '../Model/data';

const LearningCurricularSujects= ({navigation}) => {
    
    
    return(
        <>  
        <ScrollView style={{backgroundColor:"#fff"}}>
            
            <View style={styles.container}>
                <SubjectCard
                    subjectName = "English"
                    imagesrc = {englishImg}
                    height = {100}
                    onPress = {() => {navigation.navigate('LearningCurricularChapters', {chapters : data.curricular.english.chapters})}}
                />  
                <SubjectCard
                    subjectName = "Math"
                    imagesrc = {mathImg}
                    height = {100}
                />   
                <SubjectCard
                    subjectName = "Hindi"
                    imagesrc = {hindiImg}
                    height = {100}
                    onPress = {() => {navigation.navigate('LearningCurricularChapters', {chapters : data.curricular.hindi.chapters})}}
                />  
                

             </View>
                
        </ScrollView>
        </>
    )
};

export default LearningCurricularSujects;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff"
    }
})