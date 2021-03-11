import React , {useState} from "react";
import { Text, StyleSheet, View , Button, TouchableOpacity, SafeAreaViewComponent } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorCounter = ({color,onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
    </View>
};

const syles = StyleSheet.create({});

export default ColorCounter;