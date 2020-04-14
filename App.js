import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MyTextsComponents from './app/components/MyTextsComponents';
import MyImageDetectiveComponents from './app/components/MyImageDetectiveComponents';
import MyLabelComponents from './app/components/MyLabelComponents';




export default class App extends Component {
  
  render (){
    return (
      <View style={styles.container}>
        <MyTextsComponents/>
        <MyImageDetectiveComponents/>
        <MyLabelComponents/>
        
      </View>
      
    );
  };
  

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

