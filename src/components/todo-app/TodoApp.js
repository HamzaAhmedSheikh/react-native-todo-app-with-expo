import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity, Keyboard } from 'react-native';

export default function TodoApp() {
   const [getText, setText] = useState('');
   const [getList, setList] = useState(['item 1', 'item 2']); 

   let addItem = () => {
      console.log(getText);
      setList([...getList, getText]);
      setText('');
   }

  return (
    <View style={styles.container}>
     <Text style={styles.title}> todo </Text>  
     <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter Item"
        onChangeText={text => setText(text)}
        value={getText}
      /> 
      <Button title='ADD' onPress={addItem} />
     </View> 

     <View>
       <Text style={{ fontSize: 26 }}> {getText} </Text>  
     </View>  

     <ScrollView>
      {getList.map((item) =>
          <View style={styles.scrollviewItem}>
            <Text> {item} </Text> 
          </View>
      )}         
     </ScrollView>
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
  scrollviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    width: '90%',
    borderRadius: 10,
  },

});