import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MyLoginComponents from './MyLoginComponents'


export default class MyLabelComponents extends Component {
    render (){
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder = "E-mail"
                placeholderTextColor = "#fff"
                selectionColor = "#fff"
                keyboardType = "email-address"
                onSubmitEditing = {()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder = "Password"
                secureTextEntry = {true}
                placeholderTextColor = "#fff"
                 ref = {(input) => this.password = input}
                />

                <TouchableOpacity style = {styles.button}>
                 <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <MyLoginComponents/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',   
     top: 225,
    },

    inputBox: {
     width:300,
     height:50,
     backgroundColor: 'rgba(0,0,0,1)',
     borderRadius: 25,
     paddingHorizontal: 16,
     fontSize: 16,
     color: '#fff',
     marginVertical: 10,
        
    },
    button: {
     width:300,
     height:50,
     backgroundColor: '#1c313a',
     borderRadius: 25,
     marginVertical: 10,
     paddingVertical: 13,
     },

    buttonText: {
     fontSize: 16,
     fontWeight: '500',
     color: '#fff',
     textAlign: 'center',
     
    }
})