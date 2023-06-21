import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {images, colors, icons} from '../../constants';
function FiveStarts(props) {
  const {numberOfStars} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
      }}>
      {[0, 1, 2, 3, 4].map(item =>
        item <= numberOfStars - 1 ? (
          <Image
            key={`${item}`}
            style={{
              width: 10,
              height: 10,
              resizeMode: 'contain',
              marginRight: 2,
              tintColor: colors.warning,
            }}
            source={icons.star}
          />
        ) : (
          <Image
            key={`${item}`}
            style={{
              width: 10,
              height: 10,
              resizeMode: 'contain',
              marginRight: 2,
              tintColor: colors.inactive,
            }}
            source={icons.starInActive}
          />
        ),
      )}
    </View>
  );
}
export default FiveStarts;
