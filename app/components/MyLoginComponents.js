import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class MyLoginComponents extends Component {
    render () {
        return(
            <View style = {styles.container}>
                <View style = {styles.signupTextCont}>
                    <Text style = {styles.creatsText}>Don't have an acoount yet?</Text>
                    <Text style = {styles.creatsButtom}>Creats</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: -80,
    },

    signupTextCont:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 200,
    },
    creatsText: {
        color: '#1c313a',
        fontSize: 16,
    },

    creatsButtom: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    }

})



