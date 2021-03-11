import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const BoxScreen = () => {
    const [password, setPassword] = useState('');
    return <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoStyle}/>
        <View style={styles.viewThreeStyle}/>
    </View>
};

const styles = StyleSheet.create({
    parentStyle:{
        borderWidth:3,
        borderColor: 'black',
        height :200,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    viewOneStyle:{
        height: 50, width: 50,
        backgroundColor: 'red',
    },
    viewTwoStyle:{
        height: 50, width: 50,
        backgroundColor: 'green',
        top:50
    },
    viewThreeStyle:{
        height: 50, width: 50,
        backgroundColor: 'purple',
    },

});

export default BoxScreen;