import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity, Keyboard } from 'react-native';

export default function TodoApp() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}> todo </Text>  
     <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter Item"
      /> 
      <Button title='ADD' />
     </View>   
    </View>
  )  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
    alignItems: 'center',
    paddingTop: 40, 
  }, 
  title: {
    fontSize: 64,
    color: 'lightgrey',
  }, 
  inputContainer: {
    flexDirection: "row",            
    width: '70%',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  textInput: {
    borderColor: "red",
    // borderWidth: 2,
    borderBottomWidth: 2,
    width: '70%',
    // borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },

});