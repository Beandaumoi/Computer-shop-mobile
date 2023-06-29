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
import {UIHeader} from '../../components';

function ChatItem(props) {
  let {url, name, message, numberOfUnreadMessage, date} = props.user;
  let {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 80,
        paddingTop: 20,
        flexDirection: 'row',
      }}>
      <View>
        <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: 'cover',
            borderRadius: 25,
            marginLeft: 10,
            marginRight: 20,
          }}
          source={{
            uri: url,
          }}
        />
        {numberOfUnreadMessage > 0 && (
          <Text
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              fontSize: 14 * 0.8,
              right: 12,
              padding: 3,
              paddingHorizontal: numberOfUnreadMessage > 9 ? 3 : 6,
              borderRadius: 10,
              overflow: 'hidden',
              color: colors.white,
              fontWeight: 'bold',
            }}>
            {numberOfUnreadMessage}
          </Text>
        )}
      </View>

      <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
            }}>
            {name}
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: numberOfUnreadMessage > 0 ? 'bold' : '',
              color: numberOfUnreadMessage > 0 ? colors.black : colors.inactive,
              fontSize: 16,
            }}>
            {message}
          </Text>
        </View>

        <Text
          style={{
            alignSelf: 'center',
            color: colors.inactive,
            marginRight: 10
          }}>
          {date}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

export default ChatItem;
