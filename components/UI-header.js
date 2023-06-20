import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {icons, colors} from '../constants';

function UIHeader(props) {
  const {title} = props
  return (
    <View
      style={{
        height: 90,
        backgroundColor: colors.primary,
      }}>
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
    </View>
  );
}

export default UIHeader;
