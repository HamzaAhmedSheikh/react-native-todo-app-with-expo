import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


 const CustomButton = (props) => {
    let btnColor = props.color != undefined ? props.color : 'navy'; 
   return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPressEvent}
    >
     <View style={{ backgroundColor: btnColor, borderRadius: 50, padding: 10, paddingHorizontal: 20, }}>
      <Text style={{fontSize: props.textSize, color: props.textColor }}>
        {props.text}
      </Text>
     </View>
    </TouchableOpacity>  
   ) 
 }

 const styles = StyleSheet.create({  
    buttonText: {
        color: 'white',
        fontSize: 20,                 
    },
 })

 export default CustomButton;