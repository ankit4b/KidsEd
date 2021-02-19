import React from 'react';
import {View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const ContentScreen= ({route, navigation}) => {
    console.log( "Content : ",route.params.itemData)
    const itemData = route.params.itemData;
 
    return(
        <ScrollView backgroundColor="#fff" contentContainerStyle={styles.container}>
            <View style={{alignItems:"center"}}>
                <View style={{width: '95%', height: 250, padding: 5, }}>
                    <WebView                                    
                        allowsFullscreenVideo
                        allowsInlineMediaPlayback
                        mediaPlaybackRequiresUserAction
                        // source={{ uri: 'https://www.youtube.com/embed/y6TWL5hy93E' }} 
                        source={{ uri: itemData.video }} 
                        />
                </View>
            </View>

            <View style={{padding:10, alignItems: "center"}}>
                <View style={{marginTop: 10, marginBottom: 30, borderBottomColor: "#888", borderBottomWidth: 3, paddingBottom: 10, paddingHorizontal: 30}}>
                    <Text style={{fontSize:22, fontWeight: "bold", textAlign:"center"}}>
                        {itemData.articleTitle}
                        {/* A Happy child */}
                    </Text>
                </View>
                <View>
                    <Text style={styles.textContent}>
                    {itemData.articleContent}
                    </Text>
                    
                </View>
            </View>

            <View style={styles.activity}>
                <Button
                    onPress={() => {navigation.navigate('Activity', {title : itemData.articleTitle})}}
                    title="Activity"
                    color="#841584"
                    
                />
            </View>
        </ScrollView>
    )
};

export default ContentScreen;


const styles = StyleSheet.create({
    textContent:{
        fontSize:18,
        textAlign:'justify'
    },
    container:{
        backgroundColor:"#fff"
    },
    activity : {
        
        marginTop: 20
    }
})
