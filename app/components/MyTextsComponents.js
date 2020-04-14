import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MyTextsComponents = () => {
    return (
        <View>
            <Text style={styles.texts}>Anonymous</Text>
        </View>
    )
}

export default MyTextsComponents

const styles = StyleSheet.create ({
    texts: {
     fontSize: 20,
     color: '#000',
     textAlign: 'center',
     top: 290,
    },
    
});

