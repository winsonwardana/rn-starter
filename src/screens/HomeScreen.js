import React from "react";
import { Text, StyleSheet, View , Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return( 
  <View> 
    <Text style={styles.text}>Test App</Text>
    <Button 
    title="Go to Components Demo" 
    onPress={() => navigation.navigate('Components')}
    />

    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go To List Demo</Text>
    </TouchableOpacity> */}

  <Button 
    title="Go to List Demo" 
    onPress={() => navigation.navigate('List')}
    />
    <Button 
    title="Go to Images" 
    onPress={() => navigation.navigate('Image')}
    />
    <Button 
    title="Go to Counter Demo" 
    onPress={() => navigation.navigate('Counter')}
    />

<Button 
    title="Go to Color Demo" 
    onPress={() => navigation.navigate('Color')}
    />
    <Button 
    title="Go to Square Demo" 
    onPress={() => navigation.navigate('Square')}
    />
    <Button 
    title="Go to Text Demo" 
    onPress={() => navigation.navigate('Text')}
    />
    <Button 
    title="Go to Box Demo" 
    onPress={() => navigation.navigate('Box')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;


