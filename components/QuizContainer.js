import React, {useState} from  'react';
import { Text, TouchableOpacity, StyleSheet, View,} from 'react-native';

const QuizContainer = ({itemData}) => {
    const [bgcolor, setBgcolor] = useState({
        option1bgcolor: "#f2f2f2",
        option2bgcolor: "#f2f2f2",
        option3bgcolor: "#f2f2f2",
        option4bgcolor: "#f2f2f2",
    });
    const [textcolor, setTextcolor] = useState({
        option1textcolor: "#000",
        option2textcolor: "#000",
        option3textcolor: "#000",
        option4textcolor: "#000",
    });
    
    const handleChoice1 = (choice) => {
        if(choice === itemData.answer){
            console.log("True")
            setBgcolor(
                {
                    ...bgcolor,
                    option1bgcolor:"#1e9628"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option1textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        else{
            console.log("False")
            setBgcolor(
                {
                    ...bgcolor,
                    option1bgcolor:"#961e1e"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option1textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        
    }
    const handleChoice2 = (choice) => {
        if(choice === itemData.answer){
            console.log("True")
            setBgcolor(
                {
                    ...bgcolor,
                    option2bgcolor:"#1e9628"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option2textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        else{
            console.log("False")
            setBgcolor(
                {
                    ...bgcolor,
                    option2bgcolor:"#961e1e"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option2textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        
    }
    const handleChoice3 = (choice) => {
        if(choice === itemData.answer){
            console.log("True")
            setBgcolor(
                {
                    ...bgcolor,
                    option3bgcolor:"#1e9628"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option3textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        else{
            console.log("False")
            setBgcolor(
                {
                    ...bgcolor,
                    option3bgcolor:"#961e1e"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option3textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        
    }
    const handleChoice4 = (choice) => {
        if(choice === itemData.answer){
            console.log("True")
            setBgcolor(
                {
                    ...bgcolor,
                    option4bgcolor:"#1e9628"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option4textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        else{
            console.log("False")
            setBgcolor(
                {
                    ...bgcolor,
                    option4bgcolor:"#961e1e"
                }
            )
            setTextcolor(
                {
                    ...textcolor,
                    option4textcolor: "#fff",
                }
            )
            console.log(choice)
        }
        
    }


    // console.log({itemData})
    return(
            <>
            <View style={{marginTop: 15, marginBottom: 15}}>
                <Text style={{fontSize:18, marginBottom: 10}}>
                            <Text style={{fontWeight:"bold"}}>{itemData.id}. </Text> 
                            {itemData.question}
                        </Text>
                        <View style={{paddingLeft: '10%'}}>
                            <TouchableOpacity 
                                style={{borderWidth: 1, borderColor: '#ccc', width: '90%', padding: 5, alignItems:"center", backgroundColor:bgcolor.option1bgcolor, marginTop:10, borderRadius: 20}}
                                onPress={() => handleChoice1(itemData.option1)}
                                >
                                <Text style={{fontSize: 16, color: textcolor.option1textcolor}}>
                                    {itemData.option1}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{borderWidth: 1, borderColor: '#ccc', width: '90%', padding: 5, alignItems:"center", backgroundColor:bgcolor.option2bgcolor, marginTop:10, borderRadius: 20}}
                                onPress={() => handleChoice2(itemData.option2)}
                                >
                                <Text style={{fontSize: 16, color: textcolor.option2textcolor}}>
                                    {itemData.option2}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{borderWidth: 1, borderColor: '#ccc', width: '90%', padding: 5, alignItems:"center", backgroundColor:bgcolor.option3bgcolor, marginTop:10, borderRadius: 20}}
                                onPress={() => handleChoice3(itemData.option3)}
                                >
                                <Text style={{fontSize: 16, color: textcolor.option3textcolor}}>
                                    {itemData.option3}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{borderWidth: 1, borderColor: '#ccc', width: '90%', padding: 5, alignItems:"center", backgroundColor:bgcolor.option4bgcolor, marginTop:10, borderRadius: 20}}
                                onPress={() => handleChoice4(itemData.option4)}
                                >
                                <Text style={{fontSize: 16, color: textcolor.option4textcolor}}>
                                    {itemData.option4}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
            </>
        )
};

export default QuizContainer;