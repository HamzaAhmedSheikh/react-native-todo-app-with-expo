import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import CustomButton from './ButtonComponent';

export default function TodoApp() {
   const [getText, setText] = useState('');
   const [getList, setList] = useState([]); 

   let addItem = () => {
      console.log(getText);
      setList([
         ...getList,
         { key: Math.random().toString(), data: getText } ]);
      setText('');
   }

   let removeItem = (itemKey) => {
    // console.log(itemKey);
    
    let list = getList.filter(item => item.key !== itemKey)    
    setList(list);
    //  console.log('list ====>', list);
   //  setList( list => getList.filter(item => item.key !== itemKey ))
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
       
       <CustomButton
           text="ADD"
           textSize={18}
           textColor='white'
           onPressEvent={addItem}
       />
      {/* <Button title='ADD' onPress={addItem} /> */}
     </View> 

     <View>
       <Text style={{ fontSize: 26 }}> {getText} </Text>  
     </View>  

     <ScrollView style={styles.scrollview}> 
       {getList.map((item, index) =>
        <TouchableOpacity 
          key={item.key}
          activeOpacity={0.7}          
        >
         <View style={styles.scrollviewItem}>
          <Text style={styles.scrollviewText}> {index + 1}#  {item.data}{" "} </Text> 
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