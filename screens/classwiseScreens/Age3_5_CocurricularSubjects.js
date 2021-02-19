import React from 'react';
import {View, Text, ScrollView, StyleSheet , TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SubjectCard from '../../components/SubjectCard';
import paintImg from '../../assets/vector_img/paint.jpg';
import craftImg from '../../assets/vector_img/craft.jpg';

import {data} from '../../Model/data';

const Age3_5_CurricularSubjects= ({navigation}) => {
    
    
    return(
        <>  
        <ScrollView style={{backgroundColor:"#fff"}}>
            
            <View style={styles.container}>
                <SubjectCard
                    subjectName = "Drawing And Painting"
                    imagesrc = {paintImg}
                    height = {100}
                    onPress = {() => {navigation.navigate('Age3_5_CurricularChapters', {chapters : data.cocurricular.drawing.chapters})}}
                /> 
                <SubjectCard
                    subjectName = "Hand craft"
                    imagesrc = {craftImg}
                    height = {100}
                    onPress = {() => {navigation.navigate('Age3_5_CurricularChapters', {chapters : data.cocurricular.craft.chapters})}}
                />  
                

             </View>
                
        </ScrollView>
        </>
    )
};

export default Age3_5_CurricularSubjects;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff"
    }
})