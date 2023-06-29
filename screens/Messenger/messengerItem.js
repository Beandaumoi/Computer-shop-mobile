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

function MessengerItem(props) {
    let {url, isSender, messengers, timeStamp, isShowUrl} = props.item
  let {onPress} = props;
  return (
    isSender == false ? <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 10,
      }}>
      <View style= {{
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        alignItems: 'center',
    }}>
        <View style={{
            marginLeft: 100
        }}>
        <Text style={{
            color: colors.black,
            fontSize: 16,
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: colors.white, 
            borderRadius: 8,
            overflow: 'hidden',
            
        }}>{messengers}</Text>

        </View>
        {isShowUrl == true ? <Image
          style={{
            height: 50,
            width: 50,
            resizeMode: 'cover',
            borderRadius: 25,
            marginLeft: 20,
            marginRight: 10,
          }}
          source={{
            uri: url,
          }}
        />: <View style={{
            height: 50,
            width: 50,
            marginLeft: 20,
            marginRight: 10,
        }}></View>}
      </View>
    </TouchableOpacity> : 


    <TouchableOpacity
    onPress={onPress}
    style={{
      paddingTop: 10,
    }}>
    <View style= {{flexDirection: 'row', alignItems: 'center'}}>
      {isShowUrl == true ?<Image
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
      /> : <View style={{
          height: 50,
          width: 50,
          marginLeft: 10,
          marginRight: 20,
      }}></View>}
      <View style={{
          marginRight: 100
      }}>
      <Text style={{
          color: colors.black,
          fontSize: 16,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: colors.white, 
          borderRadius: 8,
          overflow: 'hidden',
          
      }}>{messengers}</Text>

      </View>
    </View>
  </TouchableOpacity>
  );
}

export default MessengerItem;
