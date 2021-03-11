import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
const ListScreen = () => {
    const friends = [
        {name : 'Ken', age: 4},
        {name : 'Vito', age: 24},
        {name : 'Vani', age: 14},
        {name : 'Vin', age: 67},
        {name : 'Men', age: 44},
        {name : 'Salmon, age: 74'},
        {name : 'Bebek', age: 90},
        {name : 'Ayam', age: 35}
    ];

    return <FlatList 
    // horizontal
    // showsHorizontalScrollIndicator = {false}
    showsVerticalScrollIndicator = {false}
    keyExtractor={friend => friend.name}
    data={friends} 
    renderItem={({ item }) => {
        return <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
            </Text>
    }}
    
    
    />

    
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;