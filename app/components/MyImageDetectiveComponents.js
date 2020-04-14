import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class MyImageDetectiveComponents extends Component {
    render (){
        return (
            <View>
                <Image style={styles.imagestyle}
                 source={require('../assets/images/hotpng.png')}/>
                <Text></Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagestyle: {
        top: 100,
        width: 150,
        height: 150,
        alignItems: 'center'
    }
})
