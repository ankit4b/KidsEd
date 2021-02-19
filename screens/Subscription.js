import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Touchable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Subscription = () => {

    const [state, setState] = useState({
        cource: 'Age 5-6',
      });

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{backgroundColor: "#154773", width: '80%', marginTop: 10, paddingVertical: 8, borderTopRightRadius: 20, borderBottomRightRadius: 5}}>
                <Text style={{fontSize: 20, fontWeight:"bold", color:"#fff", paddingLeft: 10}}>
                    Your Subscription status
                </Text>
            </View>
            <View style={{paddingHorizontal:20, paddingVertical:30}}>
                <Text style={{color:"red", textAlign:"center", fontSize:18, fontWeight:"bold"}}>
                    You have not Subscribe for any class....
                </Text>
                <View style={{marginVertical: 20, padding: 20, borderWidth: 1, borderColor: '#ccc', backgroundColor:"#def0ff"}}>
                    <Text style={{textAlign:"center", fontSize: 15, color:"#333"}}>
                        Subscribe to enjoy all articles, videos and Activities
                    </Text>
                </View>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={{backgroundColor: "#35388c", width: '90%', marginTop: 10, paddingVertical: 8, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}>
                    <Text style={{fontSize: 20, fontWeight:"bold", color:"#fff", paddingLeft: 10, textAlign:"center"}}>
                        Subscription form
                    </Text>
                </View>
            </View>
            <View style={{alignItems:"center", paddingTop: 20, paddingBottom: 20}}>
            <Picker
                selectedValue={state.course}
                style={{height: 60, width: 200, }}
                onValueChange={(itemValue, itemIndex) =>
                    setState({course: itemValue})
                  }
                >
                <Picker.Item label="Age 0-3" value="Age 0-3" />
                <Picker.Item label="Age 3-5" value="Age 3-5" />
                <Picker.Item label="Age 5-6" value="Age 5-6" />
                <Picker.Item label="Age 6-7" value="Age 6-7" />
                <Picker.Item label="Age 7-8" value="Age 7-8" />
                <Picker.Item label="Age 8-9" value="Age 8-9" />
                <Picker.Item label="Age 9-10" value="Age 9-10" />
            </Picker>

            <View>
                <Text style={{fontSize: 20}}>
                    <Text style={{fontWeight:"bold",}}>Price : </Text> Rs 500.00 
                </Text>
            </View>
            
            </View>
            
            <TouchableOpacity style={{alignItems:"center"}}>
                <View style={{backgroundColor: "#196e29", width: '70%', marginTop: 10, paddingVertical: 6, borderRadius: 5}}>
                    <Text style={{fontSize: 16, fontWeight:"bold", color:"#fff", paddingLeft: 10, textAlign:"center"}}>
                        Subscription form
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default  Subscription;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:"#fff"
    }
})