import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Kenny';
    return <View><Text style={styles.textStyle}>Getting Started with RN!</Text>
    <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize : 45
    },
    subHeaderStyle: {
        fontSize : 20
    }
});

export default ComponentsScreen;