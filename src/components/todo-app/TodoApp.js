import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity, Keyboard } from 'react-native';

export default function TodoApp() {
  return (
    <View style={styles.container}>
      <Text> Hello World </Text>  
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
});