import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import CustomButton from './ButtonComponent';
import { todoItems } from '../../constants/dummyToDoList';

export default function TodoApp() {
   const [getText, setText] = useState('');
   const [getList, setList] = useState(todoItems); 
   const [editingItem, setEditingItem] = useState(0);

   let addItem = () => {
    //   console.log(getText);
      setList([
         ...getList,
         { key: Math.random().toString(), data: getText } ]);
      setText('');
      Keyboard.dismiss();
   }

   let removeItem = (itemKey) => {
    // console.log(itemKey);    
    let list = getList.filter(item => item.key !== itemKey)    
    setList(list);
    //  console.log('list ====>', list);
   //  setList( list => getList.filter(item => item.key !== itemKey ))
  }

  let editItem = (item) => {
    setText(item.data);
    setEditingItem(item.key);     
  }

  let updateItem = () => {
      let list = getList.map(item => item.key === editingItem ?
          { key: item.key, data: getText } : item
      ) 
      setList(list);
      setText('');
      setEditingItem(0);    
   }

  const scrollView = (
    <ScrollView style={styles.scrollview}>
      {getList.map((item, index) => (
        <TouchableOpacity         
           key={item.key}
           activeOpacity={0.7}
           onPress={() => editItem(item)}
        >
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>
              {" "}
              {index + 1}# {item.data}{" "}
            </Text>
            <TouchableOpacity
              onPress={() => removeItem(item.key)}
              activeOpacity={0.4}
            >
              <View style={styles.crosstextContainer}>
                <Text style={styles.crossText}> X </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const emptyScrollView = (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ fontStyle: 'italic', fontSize: 20, color: 'grey' }}> No ToDo Items! Hurray! </Text>
    </View>     
  );

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
       
       <CustomButton
           text={ editingItem === 0 ? "ADD" : "UPDATE" }
           textSize={18}
           textColor='white'
           onPressEvent={ editingItem === 0 ? addItem : updateItem }
           disabled={getText.length <= 0}
       />
      {/* <Button title='ADD' onPress={addItem} /> */}
     </View> 

     <View>
       <Text style={{ fontSize: 26 }}> {getText} </Text>  
     </View>  

     { getList.length <= 0 ? emptyScrollView : scrollView }     
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
  scrollview: {
    width: '100%',
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
  scrollviewText: {
    fontSize: 26,
    color: 'white',
  },
  crossText: {
    fontSize: 16,
    color: 'red',    
    fontWeight: 'bold',
  }, 
  crosstextContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

});