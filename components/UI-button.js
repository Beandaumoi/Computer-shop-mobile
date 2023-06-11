import React, {Component} from "react"
import { TouchableOpacity, Text, Image } from "react-native"
import {icons, colors} from '../constants'
const UIButton = (props) => {
    const {onPress, title, isSelected} = props
    return <TouchableOpacity
    onPress={onPress}
    style={{
      borderColor: 'white',
      borderWidth: 2,
      height: 45,
      borderRadius: 5,
      //margin trái phải
      marginHorizontal: 15,
      //margin trên dưới
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.5,
      backgroundColor: isSelected == true ? 'white' : null
    }}>
      {isSelected == true && <Image source={icons.check} style= {{
        width: 30,
        height: 30,
        position: 'absolute',
        top: 5,
        left: 8,
       
      }} />}
    <Text
      style={{
        color: isSelected == true ? colors.primary : 'white',
        fontSize: 16,
      }}>
      {title}
    </Text>
  </TouchableOpacity>
}

export default UIButton