import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, FlatList, Button, Image} from 'react-native';
import {quizes} from '../Model/quizes';
import QuizContainer from '../components/QuizContainer';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Activity= ({route}) => {
    console.log(route.params.title)
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // console.log("Quizes : ",{quizes})
    const q = {quizes};
    // console.log("q : ",q.quizes.english)

    const renderItem = ({item}) => {
        return (
            <QuizContainer
                itemData = {item}
            />
        )
    }



    return(
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {route.params.title}
                </Text>
            </View>
            <View style={styles.questionContainer}>
                <View>

                       
                    <FlatList
                        data = {q.quizes.english}
                        renderItem = {renderItem}
                        keyExtractor = { item => item.id }
                    />

                </View>
                <TouchableOpacity style={{backgroundColor:"#1e4c96", marginTop:20, padding: 8, borderRadius:20}} onPress={toggleModal} >
                    <Text style={{textAlign:"center", fontSize: 20, fontWeight:"bold", color:"#fff"}}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>

        <Modal isVisible={isModalVisible} animationIn='slideInUp'>
          <View style={{flex: 1, justifyContent:"center"}}>
            

            <TouchableOpacity style={{alignItems:"center", padding: 5, backgroundColor:"#317ad4"}} onPress={toggleModal}>
                <FontAwesome name="close"  size={25} color={"white"} onPress={toggleModal}/>    
            </TouchableOpacity>
            
            <View style={{alignItems:"center", backgroundColor:"#110e40", paddingBottom:40, paddingTop:0}}>
                <Image source={require("../assets/vector_img/congo.png")} style={{width: 150, height: 150}} />
                <Text style={{color:"#fff", fontSize:25, fontWeight:"bold"}}>Congratulations....</Text>
                <Text style={{color:"#fff", marginTop:20, fontSize: 15}}>You have Successfully completed this lesson.</Text>
            </View>
            
          </View>
        </Modal>
      </View>
      
            </View>
        </ScrollView>
    )
};

export default Activity;


const styles = StyleSheet.create({
    textContent:{
        fontSize:18,
        textAlign:'justify'
    },
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingBottom: 10
    },
    title : {
        fontSize: 22,
        fontWeight:"bold",
        textAlign:"center",
        borderBottomColor:"#ccc",
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop:5,
    },
    questionContainer : {
        padding : 10,
    }
})