import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {icons, colors} from '../constants';

function UIHeader(props) {
  const {
    title,
    leftIconName,
    rightIconName,
    onPressLeftIcon,
    onPressRightIcon,
    leftImageName,
    onPressLeftImage
  } = props;
  return (
    <View
      style={{
        height: 90,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {leftIconName != undefined ?<TouchableOpacity onPress={onPressLeftIcon}>
        <Image
          style={{
            width: 18,
            height: 18,
            tintColor: colors.white,
            marginTop: 50,
            marginLeft: 5,
          }}
          source={leftIconName}
        />
      </TouchableOpacity> :  leftImageName != undefined ?<TouchableOpacity onPress={onPressLeftImage}>
        <Image
          style={{
            width: 25,
            height: 25,
            marginTop: 50,
            marginLeft: 5,
            backgroundColor: 'red',
            borderRadius: 10
          }}
          source={leftImageName}
        />
      </TouchableOpacity> : <View style={{width: 40, height: 40,marginTop: 50, borderRadius: 50}}/>}
      <Text
        style={{
          color: colors.white,
          fontSize: 24,
          alignSelf: 'center',
          marginTop: 50,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      {rightIconName != undefined ? <TouchableOpacity onPress={onPressRightIcon}>
        <Image
          style={{
            width: 18,
            height: 18,
            tintColor: colors.white,
            marginTop: 50,
            marginRight: 5,
          }}
          source={rightIconName}
        />
      </TouchableOpacity> : <View style={{width: 40, height: 40, marginTop: 50, borderRadius: 50}}/>}
    </View>
  );
}

export default UIHeader;
